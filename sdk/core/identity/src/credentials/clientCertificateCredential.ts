// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import { AccessToken } from './accessToken';
import { RequestOptionsBase } from '@azure/core-http';
import { AzureCredential } from './azureCredential';
import { IdentityClientOptions } from '../client/identityClient';

export class ClientCertificateCredential extends AzureCredential {
  constructor(
    private tenantId: string,
    private clientId: string,
    private cetificatePath: string,
    options?: IdentityClientOptions) {
    super(options)
  }

  protected getTokenCore(scopes: string[], requestOptions?: RequestOptionsBase): Promise<AccessToken> {
    // TODO: Provide an implementation for Node.js
    throw 'This is not yet implemented!'
  }
}
