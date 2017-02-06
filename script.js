// ADD NEW ROWS IN THE TABLE
$(document).ready(function () {
    $('#addButton').on('click', function () {
        let name = $('#firstName').val();
        let email = $('#emailAddress').val();
        let phone = $('#phoneNumber').val();
        let result = `<tr>
            <td>${name}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>
                <button type="button" class="btn btn-secondary">Read</button>
                <button type="button" class="btn btn-success">Update</button>
                <button type="button" class="btn btn-danger">Delete</button>
            </td>        
        </tr>`;
        $('table tbody').append(result);
    });
});

// READ THE DATA FROM THE TABLE AND WRITE IN THE DETAILS FIELD
$(document).on('click', '.btn-secondary', function(){   
        let name = $(this).closest('tr').find('td:nth-child(1)').text();
        let email = $(this).closest('tr').find('td:nth-child(2)').text();
        let phone = $(this).closest('tr').find('td:nth-child(3)').text();
        $('#textArea').append(`Name: ${name}, E-mail: ${email}, Phone: ${phone}`); // How to add new line here? <br> doesnt work.
});

// HIDE ROWS WHEN WE CLICK ON THE DELETE BUTTON
$(document).on('click', '.btn-danger', function(){
        let items = $(this).closest('tr');
        items.hide();

});

// UPDATE CONTACT INFORMATIONS
$(document).on('click', '.btn-success', function(){
    

});



// CHANGE COLOR OF THE GIVEN ROW IN TABLE
$(document).on('click', 'tr', function(){
        $(this).toggleClass('highlight');
});
