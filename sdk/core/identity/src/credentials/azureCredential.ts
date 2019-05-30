// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import { AccessToken } from './accessToken';
import { EnvironmentCredential } from './environmentCredential';
import { TokenCredential, TokenResult, RequestOptionsBase } from '@azure/core-http'
import { IdentityClient, IdentityClientOptions } from '../client/identityClient'

export abstract class AzureCredential implements TokenCredential {
  private cachedToken?: AccessToken;
  protected identityClient: IdentityClient;

  public static Default = new EnvironmentCredential()

  constructor(options?: IdentityClientOptions) {
    this.identityClient = new IdentityClient(options || IdentityClient.getDefaultOptions())
  }

  public async getToken(scopes: string[], requestOptions?: RequestOptionsBase): Promise<TokenResult> {
    // TODO: Implement token refresh logic
    this.cachedToken = await this.getTokenCore(scopes, requestOptions)
    return { result: 'token', token: this.cachedToken.token }
  }

  protected abstract getTokenCore(scopes: string[], requestOptions?: RequestOptionsBase): Promise<AccessToken>;
}
