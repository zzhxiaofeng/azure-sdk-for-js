/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/quotasMappers";
import * as Parameters from "../models/parameters";
import { AzureMachineLearningWorkspacesContext } from "../azureMachineLearningWorkspacesContext";

/** Class representing a Quotas. */
export class Quotas {
  private readonly client: AzureMachineLearningWorkspacesContext;

  /**
   * Create a Quotas.
   * @param {AzureMachineLearningWorkspacesContext} client Reference to the service client.
   */
  constructor(client: AzureMachineLearningWorkspacesContext) {
    this.client = client;
  }

  /**
   * Update quota for each VM family in workspace.
   * @param location The location for update quota is queried.
   * @param parameters Quota update parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.QuotasUpdateResponse>
   */
  update(location: string, parameters: Models.QuotaUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.QuotasUpdateResponse>;
  /**
   * @param location The location for update quota is queried.
   * @param parameters Quota update parameters.
   * @param callback The callback
   */
  update(location: string, parameters: Models.QuotaUpdateParameters, callback: msRest.ServiceCallback<Models.UpdateWorkspaceQuotasResult>): void;
  /**
   * @param location The location for update quota is queried.
   * @param parameters Quota update parameters.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(location: string, parameters: Models.QuotaUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UpdateWorkspaceQuotasResult>): void;
  update(location: string, parameters: Models.QuotaUpdateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.UpdateWorkspaceQuotasResult>, callback?: msRest.ServiceCallback<Models.UpdateWorkspaceQuotasResult>): Promise<Models.QuotasUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.QuotasUpdateResponse>;
  }

  /**
   * Gets the currently assigned Workspace Quotas based on VMFamily.
   * @param location The location for which resource usage is queried.
   * @param [options] The optional parameters
   * @returns Promise<Models.QuotasListResponse>
   */
  list(location: string, options?: msRest.RequestOptionsBase): Promise<Models.QuotasListResponse>;
  /**
   * @param location The location for which resource usage is queried.
   * @param callback The callback
   */
  list(location: string, callback: msRest.ServiceCallback<Models.ListWorkspaceQuotas>): void;
  /**
   * @param location The location for which resource usage is queried.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(location: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListWorkspaceQuotas>): void;
  list(location: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ListWorkspaceQuotas>, callback?: msRest.ServiceCallback<Models.ListWorkspaceQuotas>): Promise<Models.QuotasListResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.QuotasListResponse>;
  }

  /**
   * Gets the currently assigned Workspace Quotas based on VMFamily.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.QuotasListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.QuotasListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ListWorkspaceQuotas>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListWorkspaceQuotas>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ListWorkspaceQuotas>, callback?: msRest.ServiceCallback<Models.ListWorkspaceQuotas>): Promise<Models.QuotasListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.QuotasListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.MachineLearningServices/locations/{location}/updateQuotas",
  urlParameters: [
    Parameters.location,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.QuotaUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.UpdateWorkspaceQuotasResult
    },
    default: {
      bodyMapper: Mappers.MachineLearningServiceError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.MachineLearningServices/locations/{location}/Quotas",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.location
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListWorkspaceQuotas
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListWorkspaceQuotas
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
