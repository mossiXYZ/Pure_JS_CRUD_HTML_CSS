var selectedRow = null;

function onSubmit(){
    var formData = readFormData();
    if (validate()){
        if(selectedRow == null)
        insertData(formData);
    else   
        updateRecord(formData);
    
    resetForm();
    }
   
}

function readFormData(){
    var formData ={};
    formData["productName"] =document.getElementById('productName').value;
    formData["category"] =document.getElementById('category').value;
    formData["stoke"] =document.getElementById('stoke').value;
    formData["price"] =document.getElementById('price').value;

    return formData;
}

function insertData(data){
    
    // Find a <table> element with id="productList":
    var table = document.getElementById("productList").getElementsByTagName('tbody')[0];

    // Create an empty <tr> element and add it to the 1st position of the table:
    // fot last position we can replace 0 with table.length 
    var row = table.insertRow(table.length);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);

    // Add some text to the new cells:
    cell0.innerHTML = data.productName;
    cell1.innerHTML = data.category;
    cell2.innerHTML = data.stoke;
    cell3.innerHTML = data.price;
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("productName").value = "";
    document.getElementById("category").value = "";
    document.getElementById("stoke").value = "";
    document.getElementById("price").value = "";
    selectedRow = null;
}

function onEdit(td){
    //to store the corresponding html table row (tr element)
    selectedRow =td.parentElement.parentElement;
    document.getElementById("productName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("category").value = selectedRow.cells[1].innerHTML;
    document.getElementById("stoke").value = selectedRow.cells[2].innerHTML;
    document.getElementById("price").value = selectedRow.cells[3].innerHTML;

}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.productName;
    selectedRow.cells[1].innerHTML = formData.category;
    selectedRow.cells[2].innerHTML = formData.stoke;
    selectedRow.cells[3].innerHTML = formData.price;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("productList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("productName").value == "") {
        isValid = false;
        document.getElementById("productNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("productNameValidationError").classList.contains("hide"))
            document.getElementById("productNameValidationError").classList.add("hide");
    }
    return isValid;
}