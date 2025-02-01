// Function to handle file reading
function readFile(event) {
    const file = event.target.files[0];  // Get the selected file
    if (!file) {
        return;  // If no file is selected, exit the function
    }

    const reader = new FileReader();  // Create a FileReader instance

    // This function will run once the file is read successfully
    reader.onload = function(e) {
        const content = e.target.result;  // Get the content of the file
        document.getElementById('fileContent').textContent = content;  // Display content in the div
    };

    // This function will run if there is an error reading the file
    reader.onerror = function() {
        console.error('Error reading file');
        document.getElementById('fileContent').textContent = "Error reading file.";
    };

    // Read the file as text (UTF-8 encoding)
    reader.readAsText(file);
}

// Attach event listener to the file input element
document.getElementById('fileInput').addEventListener('change', readFile);