$(function() {
    // Didn't have enough time to implement add / edit / delete functions for Towns
    var baseURL = 'https://baas.kinvey.com/appdata/kid_-JngORyCCg',
        HEADERS = {'Authorization': 'Basic cGVzaG86MTIzNA=='};

    function loadCountries() {
        $.ajax({
            url: baseURL + '/Country',
            type: 'GET',
            headers: HEADERS,
            success: function(data) {
                data.forEach(function(country) {
                    var $tr = $('<tr></tr>'),
                        $country = $('<td class="country">' + country.name + '</td>'),
                        $town = $('<td class="town"></td>'),
                        $editCountry = $('<td class="edit-country-buttons">'),
                        $editTown = $('<td class="edit-town-buttons"></td>'),
                        $editCountryButtons = $('<i class="update-country fa fa-pencil-square-o" title="Update country">' +
                                         '</i><i class="delete-country fa fa-trash-o" title="Delete country"></i>'),
                        $editTownButtons = $('<i class="update-town fa fa-pencil-square-o" title="Update town">' +
                                         '</i><i class="fa fa-trash-o" title="Delete town"></i>');

                    $country.appendTo($tr);
                    $town.appendTo($tr);
                    $editCountryButtons.appendTo($editCountry);
                    $editTownButtons.appendTo($editTown);
                    $editCountry.appendTo($tr);
                    $editTown.appendTo($tr);
                    $tr.appendTo('table');

                    $country.data('country', country);
                });
            },
            error: function(err) {
                console.log('Cannot load countries');
            }
        });
    }

    function loadTownsByCountry(countryId, townCell) {
        $.ajax({
            url: baseURL + '/Town' + '?query={"country":{"_type":"KinveyRef","_id":'+ JSON.stringify(countryId) +',"_collection":"Country"}}&resolve=country',
            type: 'GET',
            headers: HEADERS,
            success: function(response) {
                if(townCell.children().length === 0) {
                    response.forEach(function(town) {
                        townCell.append('<p>' + town.name + '</p>');
                    });
                }
            },
            error: function(err) {
                console.log(err);
            }
        });
    }

    function editCountry(countryName, country) {
        $.ajax({
            url: baseURL + '/Country/' + country._id,
            type: 'PUT',
            headers: HEADERS,
            contentType: 'application/json',
            data: JSON.stringify({
                name: countryName
            }),
            success: function() {
                console.log('Country was updated');
            },
            error: function(err) {
                console.error(err);
            }

        });
    }

    function addCountry(country) {
        $.ajax({
            url: baseURL + '/Country',
            type: 'POST',
            headers: HEADERS,
            contentType: 'application/json',
            data: JSON.stringify({
                name: country
            }),
            success: function(country) {
                var $tr = $('<tr></tr>'),
                    $country = $('<td class="country">' + country.name + '</td>'),
                    $town = $('<td class="town"></td>'),
                    $editCountry = $('<td class="edit-country-buttons">'),
                    $editTown = $('<td class="edit-town-buttons"></td>'),
                    $editCountryButtons = $('<i class="update-country fa fa-pencil-square-o" title="Update country">' +
                                     '</i><i class="delete-country fa fa-trash-o" title="Delete country"></i>'),
                    $editTownButtons = $('<i class="update-town fa fa-pencil-square-o" title="Update town">' +
                                         '</i><i class="fa fa-trash-o" title="Delete town"></i>');

                    $country.data('country', country);
                    $country.appendTo($tr);
                    $town.appendTo($tr);
                    $editCountryButtons.appendTo($editCountry);
                    $editTownButtons.appendTo($editTown);
                    $editCountry.appendTo($tr);
                    $editTown.appendTo($tr);
                    $tr.appendTo('tbody');

            },
            error: function(err) {
                console.error(err);
            }

        });
    }

    function deleteCountry(country, row) {
        $.ajax({
            url: baseURL + '/Country/' + country._id,
            type: 'DELETE',
            headers: HEADERS,
            success: function(country) {
                $(row).remove();
            },
            error: function(err) {
                console.error(err);
            }
        });
    }

    loadCountries();

    $(document).on('click', '.update-country', function() {
        var $country = $(this).parent().parent().find('td').eq(0),
            $input = $('<input type="text">').val($country.text());

        $country.html($input);
        $input.focus().select();

        $($input).on('keypress', function(e) {
            if(e.keyCode == '13') {
                var country = $country.data('country'),
                    name = this.value;

                editCountry(name, country);
                $country.html(this.value);
            }
        });

    });

    $(document).on('click', '#add-country', function() {
        var $country = $(this).next().val();
        addCountry($country);

        $(this).next().val('');
    });

    $(document).on('click', '.delete-country', function() {
        var $countryRow = $(this).parent().parent(),
            $country = $(this).parent().parent().find('td').eq(0).data('country');

        deleteCountry($country, $countryRow);
    });

    $(document).on('click', '.country', function() {
        var $countryId = $(this).data('country')._id,
            $townCell = $(this).parent().find('.town');
        loadTownsByCountry($countryId, $townCell);
    });
});
