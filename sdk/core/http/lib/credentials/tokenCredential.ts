// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import { RequestOptionsBase } from "../webResource";

/**
 * A TokenResult which indicates that a token was successfully received.
 */
export interface TokenReceived {
  result: 'token'
  token: string
}

/**
 * A TokenResult which indicates that the TokenCredential cannot produce
 * a token for the given reason.
 */
export interface TokenUnavailable {
  result: 'unavailable'
  reason: string
}

/**
 * A TokenResult which indicates that an error occurred while retrieving the token.
 */
export interface TokenError {
  result: 'error'
  error: Error
}

/**
 * Represents the possible outcomes of TokenCredential's getToken method.
 */
export type TokenResult = TokenReceived | TokenUnavailable | TokenError

/**
 * Represents a credential capable of providing an authentication token.
 */
export interface TokenCredential {
  /**
   * Gets the token provided by this credential.
   *
   * @param scopes The list of scopes for which the token will have access.
   * @param aborter The AbortSignalLike used for aborting the token request.
   */
  getToken(
    scopes: string[],
    requestOptions?: RequestOptionsBase
  ): Promise<TokenResult>; // | null, add another state for unavailable
}
