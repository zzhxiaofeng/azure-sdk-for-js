// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import { TokenCredential, TokenResult, RequestOptionsBase } from '@azure/core-http';

export class AggregateCredential implements TokenCredential {
  private _sources: TokenCredential[] = []

  constructor(...sources: TokenCredential[]) {
    this._sources = sources
  }

  async getToken(scopes: string[], requestOptions?: RequestOptionsBase): Promise<TokenResult> {
    let tokenResult: TokenResult = { result: 'unavailable', reason: 'No TokenCredential returned a token.' }

    for (let i = 0; i < this._sources.length; i++) {
      const token = await this._sources[i].getToken(scopes, requestOptions)
      if (token.result === 'token') {
        tokenResult = token
      }
    }

    return tokenResult
  }
}
