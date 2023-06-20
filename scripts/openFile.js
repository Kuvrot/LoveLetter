function importData() {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = '.anel , .txt , .html';
    input.onchange = function() {
      let file = input.files[0];
  
      let reader = new FileReader();
      reader.onload = function(e) {
        // The contents of the file are accessible here
        let fileContents = reader.result;
        $('#summernote').summernote('code' , fileContents);
  
        // Perform operations with the file contents
      };
      reader.readAsText(file); // Read the file as text
    };
    input.click();
  }






