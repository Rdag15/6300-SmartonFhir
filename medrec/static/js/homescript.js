function onError(data) {
    $('body').append(JSON.stringify(data));
}

function onReady(SMART) {
    // Page receives access token from auth server
    // use the access token, and start fetching patient data
    // access token valid for 10 min

    //access token
    var token = SMART.tokenResponse.access_token;

    //patient ID
    var patient = SMART.tokenResponse.patient;

    //FHIR endpoint
    var baseURL = SMART.server.serviceUrl;

    //start the app workflow
    // pass the access_token, patient ID, fhir endpoint
    var json_data = {};
        json_data.token = token;
        json_data.patient = patient;
        json_data.baseURL = baseURL;
    
    // custom js method to make the fhir queries
    // the method is described in app-script.js
    get_medications(json_data);
}
//start here
//when page is laoded the index receives code
// this fhir function, exchanges code for access token
FHIR.oauth2.ready(onReady, onError);