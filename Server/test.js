const MyModel = require("./path/to/MyModel"); // Import your Mongoose model

// Find the document you want to update
MyModel.findById(documentId)
  .then((document) => {
    if (!document) {
      console.log("Document not found");
      return;
    }

    // Remove duplicates from the array using $addToSet and $each
    const uniqueArray = Array.from(new Set(document.myArrayField));

    // Update the document with the new array
    document.myArrayField = uniqueArray;
    return document.save();
  })
  .then((updatedDocument) => {
    console.log("Update successful:", updatedDocument);
  })
  .catch((error) => {
    console.error("Error updating:", error);
  });

const MyModel = require("./path/to/MyModel"); // Import your Mongoose model

// Update the document to remove duplicate file paths from the array
MyModel.updateOne(
  { _id: documentId }, // Specify the document by its unique _id
  { $addToSet: { filePathArray: { $each: [] } } }
)
  .then((result) => {
    console.log("Update successful:", result);
  })
  .catch((error) => {
    console.error("Error updating:", error);
  });
