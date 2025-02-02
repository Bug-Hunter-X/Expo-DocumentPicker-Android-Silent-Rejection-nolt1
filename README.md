# Expo DocumentPicker Android Silent Rejection

This repository demonstrates a bug in the Expo DocumentPicker API on Android.  The promise returned by `DocumentPicker.getDocumentAsync()` sometimes rejects silently, providing no error message to help debug the issue. The picker seems to work, but the result is undefined. This makes it difficult to handle file selection errors gracefully.

## Steps to Reproduce

1. Clone this repository.
2. Run the project on an Android emulator or device (the issue does not appear on iOS).
3. Attempt to select a file using the DocumentPicker. The promise will sometimes reject without providing any details in the console.

## Expected Behavior

The promise should either resolve with the selected file information or reject with a descriptive error message that indicates the cause of the failure.

## Actual Behavior

The promise rejects, but without providing any error object, making it impossible to determine why the file selection failed.

## Solution (bugSolution.js)

This is a workaround which handles potential errors. It doesn't solve the root cause of the silent rejection, but allows a more robust error handling.