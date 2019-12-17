## API Report File for "@azure/app-configuration"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { HttpResponse } from '@azure/core-http';
import { OperationOptions } from '@azure/core-http';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { TokenCredential } from '@azure/identity';
import { UserAgentOptions } from '@azure/core-http';

// @public
export interface AddConfigurationSettingOptions extends OperationOptions {
}

// @public
export interface AddConfigurationSettingParam extends ConfigurationSettingParam {
}

// @public
export interface AddConfigurationSettingResponse extends ConfigurationSetting, SyncTokenHeaderField, HttpResponseField<SyncTokenHeaderField> {
}

// @public
export class AppConfigurationClient {
    constructor(connectionString: string, options?: AppConfigurationClientOptions);
    constructor(endpoint: string, tokenCredential: TokenCredential, options?: AppConfigurationClientOptions);
    addConfigurationSetting(configurationSetting: AddConfigurationSettingParam, options?: AddConfigurationSettingOptions): Promise<AddConfigurationSettingResponse>;
    deleteConfigurationSetting(id: ConfigurationSettingId, options?: DeleteConfigurationSettingOptions): Promise<DeleteConfigurationSettingResponse>;
    getConfigurationSetting(id: ConfigurationSettingId, options?: GetConfigurationSettingOptions): Promise<GetConfigurationSettingResponse>;
    listConfigurationSettings(options?: ListConfigurationSettingsOptions): PagedAsyncIterableIterator<ConfigurationSetting, ListConfigurationSettingPage>;
    listRevisions(options?: ListRevisionsOptions): PagedAsyncIterableIterator<ConfigurationSetting, ListRevisionsPage>;
    setConfigurationSetting(configurationSetting: SetConfigurationSettingParam, options?: SetConfigurationSettingOptions): Promise<SetConfigurationSettingResponse>;
    setReadOnly(id: ConfigurationSettingId, readOnly: boolean, options?: SetReadOnlyOptions): Promise<SetReadOnlyResponse>;
    }

// @public
export interface AppConfigurationClientOptions {
    userAgentOptions?: UserAgentOptions;
}

// @public
export interface ConfigurationSetting extends ConfigurationSettingParam {
    isReadOnly: boolean;
    lastModified?: Date;
}

// @public
export interface ConfigurationSettingId {
    etag?: string;
    key: string;
    label?: string;
}

// @public
export interface ConfigurationSettingParam extends ConfigurationSettingId {
    contentType?: string;
    tags?: {
        [propertyName: string]: string;
    };
    value?: string;
}

// @public
export type ConfigurationSettingResponse<HeadersT> = ConfigurationSetting & HttpResponseField<HeadersT> & Pick<HeadersT, Exclude<keyof HeadersT, "eTag">>;

// @public
export interface DeleteConfigurationSettingOptions extends HttpOnlyIfUnchangedField, OperationOptions {
}

// @public
export interface DeleteConfigurationSettingResponse extends SyncTokenHeaderField, HttpResponseFields, HttpResponseField<SyncTokenHeaderField> {
}

// @public
export interface GetConfigurationHeaders extends SyncTokenHeaderField {
}

// @public
export interface GetConfigurationSettingOptions extends OperationOptions, HttpOnlyIfChangedField, OptionalFields {
    acceptDateTime?: Date;
}

// @public
export interface GetConfigurationSettingResponse extends ConfigurationSetting, GetConfigurationHeaders, HttpResponseFields, HttpResponseField<GetConfigurationHeaders> {
}

// @public
export interface HttpOnlyIfChangedField {
    onlyIfChanged?: boolean;
}

// @public
export interface HttpOnlyIfUnchangedField {
    onlyIfUnchanged?: boolean;
}

// @public
export interface HttpResponseField<HeadersT> {
    _response: HttpResponse & {
        parsedHeaders: HeadersT;
        bodyAsText: string;
    };
}

// @public
export interface HttpResponseFields {
    statusCode: number;
}

// @public
export interface ListConfigurationSettingPage extends HttpResponseField<SyncTokenHeaderField> {
    items: ConfigurationSetting[];
}

// @public
export interface ListConfigurationSettingsOptions extends OperationOptions, ListSettingsOptions {
}

// @public
export interface ListRevisionsOptions extends OperationOptions, ListSettingsOptions {
}

// @public
export interface ListRevisionsPage extends HttpResponseField<SyncTokenHeaderField> {
    items: ConfigurationSetting[];
}

// @public
export interface ListSettingsOptions extends OptionalFields {
    acceptDateTime?: Date;
    keyFilter?: string;
    labelFilter?: string;
}

// @public
export interface OptionalFields {
    fields?: (keyof ConfigurationSetting)[];
}

// @public
export interface SetConfigurationSettingOptions extends HttpOnlyIfUnchangedField, OperationOptions {
}

// @public
export interface SetConfigurationSettingParam extends ConfigurationSettingParam {
}

// @public
export interface SetConfigurationSettingResponse extends ConfigurationSetting, SyncTokenHeaderField, HttpResponseField<SyncTokenHeaderField> {
}

// @public
export interface SetReadOnlyOptions extends HttpOnlyIfUnchangedField, OperationOptions {
}

// @public
export interface SetReadOnlyResponse extends ConfigurationSetting, SyncTokenHeaderField, HttpResponseField<SyncTokenHeaderField> {
}

// @public
export interface SyncTokenHeaderField {
    syncToken?: string;
}


// (No @packageDocumentation comment for this package)

```