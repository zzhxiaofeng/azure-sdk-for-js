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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { EventGridManagementClientContext } from "./eventGridManagementClientContext";


class EventGridManagementClient extends EventGridManagementClientContext {
  // Operation groups
  domains: operations.Domains;
  domainTopics: operations.DomainTopics;
  eventSubscriptions: operations.EventSubscriptions;
  operations: operations.Operations;
  topics: operations.Topics;
  privateEndpointConnections: operations.PrivateEndpointConnections;
  privateLinkResources: operations.PrivateLinkResources;
  topicTypes: operations.TopicTypes;

  /**
   * Initializes a new instance of the EventGridManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Subscription credentials that uniquely identify a Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.EventGridManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.domains = new operations.Domains(this);
    this.domainTopics = new operations.DomainTopics(this);
    this.eventSubscriptions = new operations.EventSubscriptions(this);
    this.operations = new operations.Operations(this);
    this.topics = new operations.Topics(this);
    this.privateEndpointConnections = new operations.PrivateEndpointConnections(this);
    this.privateLinkResources = new operations.PrivateLinkResources(this);
    this.topicTypes = new operations.TopicTypes(this);
  }
}

// Operation Specifications

export {
  EventGridManagementClient,
  EventGridManagementClientContext,
  Models as EventGridManagementModels,
  Mappers as EventGridManagementMappers
};
export * from "./operations";
