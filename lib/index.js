/**
  * @module SpeakerRecognitionAPILib
  *  
  * TODO: Add a description
  */

var configuration = require('./configuration'),
    AuthorizationController = require('./Controllers/AuthorizationController'),
    OrganizationsController = require('./Controllers/OrganizationsController'),
    RepresentativesController = require('./Controllers/RepresentativesController'),
    ClientsController = require('./Controllers/ClientsController'),
    ModelsController = require('./Controllers/ModelsController'),
    CallsController = require('./Controllers/CallsController'),
    GetAPIVersionAndTestAuthenticationResponse = require('./Models/GetAPIVersionAndTestAuthenticationResponse'),
    ListAllOrganizationsResponse = require('./Models/ListAllOrganizationsResponse'),
    CreateAnOrganizationRequest = require('./Models/CreateAnOrganizationRequest'),
    RetrieveAListOfAllRepresentativesResponse = require('./Models/RetrieveAListOfAllRepresentativesResponse'),
    GetARepresentativeResponse = require('./Models/GetARepresentativeResponse'),
    CreateARepresentativeRequest = require('./Models/CreateARepresentativeRequest'),
    CreateARepresentativeResponse = require('./Models/CreateARepresentativeResponse'),
    RetrieveAListOfAllClientsResponse = require('./Models/RetrieveAListOfAllClientsResponse'),
    GetAClientResponse = require('./Models/GetAClientResponse'),
    UpdateAClientRequest = require('./Models/UpdateAClientRequest'),
    UpdateAClientResponse = require('./Models/UpdateAClientResponse'),
    RetrieveAListOfAllModelsResponse = require('./Models/RetrieveAListOfAllModelsResponse'),
    RetrieveAModelResponse = require('./Models/RetrieveAModelResponse'),
    RetrieveAListOfAllCallsResponse = require('./Models/RetrieveAListOfAllCallsResponse'),
    RetrieveACallResponse = require('./Models/RetrieveACallResponse'),
    CreateANewCallRecordAndTriggerRecognitionAlgorithmExecutionRequest = require('./Models/CreateANewCallRecordAndTriggerRecognitionAlgorithmExecutionRequest'),
    CreateANewCallRecordAndTriggerRecognitionAlgorithmExecutionResponse = require('./Models/CreateANewCallRecordAndTriggerRecognitionAlgorithmExecutionResponse'),
    UpdateAnExistingCallRecordAndTriggerRecognitionAlgorithmExecutionRequest = require('./Models/UpdateAnExistingCallRecordAndTriggerRecognitionAlgorithmExecutionRequest'),
    UpdateAnExistingCallRecordAndTriggerRecognitionAlgorithmExecutionResponse = require('./Models/UpdateAnExistingCallRecordAndTriggerRecognitionAlgorithmExecutionResponse');


function initializer(){}

//Main functional components of SpeakerRecognitionAPILib
initializer.configuration = configuration;
initializer.AuthorizationController = AuthorizationController;
initializer.OrganizationsController = OrganizationsController;
initializer.RepresentativesController = RepresentativesController;
initializer.ClientsController = ClientsController;
initializer.ModelsController = ModelsController;
initializer.CallsController = CallsController;

//Main Models of SpeakerRecognitionAPILib
initializer.GetAPIVersionAndTestAuthenticationResponse = GetAPIVersionAndTestAuthenticationResponse;
initializer.ListAllOrganizationsResponse = ListAllOrganizationsResponse;
initializer.CreateAnOrganizationRequest = CreateAnOrganizationRequest;
initializer.RetrieveAListOfAllRepresentativesResponse = RetrieveAListOfAllRepresentativesResponse;
initializer.GetARepresentativeResponse = GetARepresentativeResponse;
initializer.CreateARepresentativeRequest = CreateARepresentativeRequest;
initializer.CreateARepresentativeResponse = CreateARepresentativeResponse;
initializer.RetrieveAListOfAllClientsResponse = RetrieveAListOfAllClientsResponse;
initializer.GetAClientResponse = GetAClientResponse;
initializer.UpdateAClientRequest = UpdateAClientRequest;
initializer.UpdateAClientResponse = UpdateAClientResponse;
initializer.RetrieveAListOfAllModelsResponse = RetrieveAListOfAllModelsResponse;
initializer.RetrieveAModelResponse = RetrieveAModelResponse;
initializer.RetrieveAListOfAllCallsResponse = RetrieveAListOfAllCallsResponse;
initializer.RetrieveACallResponse = RetrieveACallResponse;
initializer.CreateANewCallRecordAndTriggerRecognitionAlgorithmExecutionRequest = CreateANewCallRecordAndTriggerRecognitionAlgorithmExecutionRequest;
initializer.CreateANewCallRecordAndTriggerRecognitionAlgorithmExecutionResponse = CreateANewCallRecordAndTriggerRecognitionAlgorithmExecutionResponse;
initializer.UpdateAnExistingCallRecordAndTriggerRecognitionAlgorithmExecutionRequest = UpdateAnExistingCallRecordAndTriggerRecognitionAlgorithmExecutionRequest;
initializer.UpdateAnExistingCallRecordAndTriggerRecognitionAlgorithmExecutionResponse = UpdateAnExistingCallRecordAndTriggerRecognitionAlgorithmExecutionResponse;

module.exports = initializer;