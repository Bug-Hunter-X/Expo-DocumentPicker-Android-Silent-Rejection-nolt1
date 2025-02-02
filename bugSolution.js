// bug.js
import * as DocumentPicker from 'expo-document-picker';

async function pickDocument() {
  try {
    const result = await DocumentPicker.getDocumentAsync({});
    console.log('Result:', result);
  } catch (error) {
    console.error('Error picking document:', error);
  }
}
pickDocument();

//bugSolution.js
import * as DocumentPicker from 'expo-document-picker';

async function pickDocument() {
  let result;
  try {
    result = await DocumentPicker.getDocumentAsync({});
    if (result.type === 'cancel') {
      console.log('User cancelled file selection.');
      return null; //or throw an error
    } else if (result.uri === null || result.uri.length === 0) {
      //Handle cases where uri is empty or null
       throw new Error('File selection failed: URI is empty or null.');
    }
    console.log('Result:', result);
    return result;
  } catch (error) {
    console.error('Error picking document:', error);
    return null; // or throw the error to be handled further up the call stack
  }
}
pickDocument();