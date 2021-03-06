/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/alertsMappers";
import * as Parameters from "../models/parameters";
import { DataBoxEdgeManagementClientContext } from "../dataBoxEdgeManagementClientContext";

/** Class representing a Alerts. */
export class Alerts {
  private readonly client: DataBoxEdgeManagementClientContext;

  /**
   * Create a Alerts.
   * @param {DataBoxEdgeManagementClientContext} client Reference to the service client.
   */
  constructor(client: DataBoxEdgeManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all the alerts for a Data Box Edge/Data Box Gateway device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsListByDataBoxEdgeDeviceResponse>
   */
  listByDataBoxEdgeDevice(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertsListByDataBoxEdgeDeviceResponse>;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param callback The callback
   */
  listByDataBoxEdgeDevice(deviceName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.AlertList>): void;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDataBoxEdgeDevice(deviceName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertList>): void;
  listByDataBoxEdgeDevice(deviceName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertList>, callback?: msRest.ServiceCallback<Models.AlertList>): Promise<Models.AlertsListByDataBoxEdgeDeviceResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        resourceGroupName,
        options
      },
      listByDataBoxEdgeDeviceOperationSpec,
      callback) as Promise<Models.AlertsListByDataBoxEdgeDeviceResponse>;
  }

  /**
   * @summary Gets an alert by name.
   * @param deviceName The device name.
   * @param name The alert name.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsGetResponse>
   */
  get(deviceName: string, name: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertsGetResponse>;
  /**
   * @param deviceName The device name.
   * @param name The alert name.
   * @param resourceGroupName The resource group name.
   * @param callback The callback
   */
  get(deviceName: string, name: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.Alert>): void;
  /**
   * @param deviceName The device name.
   * @param name The alert name.
   * @param resourceGroupName The resource group name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(deviceName: string, name: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Alert>): void;
  get(deviceName: string, name: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Alert>, callback?: msRest.ServiceCallback<Models.Alert>): Promise<Models.AlertsGetResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        name,
        resourceGroupName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AlertsGetResponse>;
  }

  /**
   * Gets all the alerts for a Data Box Edge/Data Box Gateway device.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsListByDataBoxEdgeDeviceNextResponse>
   */
  listByDataBoxEdgeDeviceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertsListByDataBoxEdgeDeviceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByDataBoxEdgeDeviceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AlertList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDataBoxEdgeDeviceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertList>): void;
  listByDataBoxEdgeDeviceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertList>, callback?: msRest.ServiceCallback<Models.AlertList>): Promise<Models.AlertsListByDataBoxEdgeDeviceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByDataBoxEdgeDeviceNextOperationSpec,
      callback) as Promise<Models.AlertsListByDataBoxEdgeDeviceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByDataBoxEdgeDeviceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/alerts",
  urlParameters: [
    Parameters.deviceName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/alerts/{name}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.name,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Alert
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByDataBoxEdgeDeviceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
