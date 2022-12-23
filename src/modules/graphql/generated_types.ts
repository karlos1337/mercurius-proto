import type { GraphQLResolveInfo } from 'graphql';
import type { MercuriusContext } from 'mercurius';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) =>
  | Promise<import('mercurius-codegen').DeepPartial<TResult>>
  | import('mercurius-codegen').DeepPartial<TResult>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _FieldSet: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct: ProductPayload;
  createSubProduct: SubProductPayload;
};

export type MutationcreateProductArgs = {
  input: CreateProductInput;
};

export type MutationcreateSubProductArgs = {
  input: CreateSubProductInput;
};

export type Query = {
  __typename?: 'Query';
  product?: Maybe<ProductPayload>;
};

export type QueryproductArgs = {
  input: ProductInput;
};

export type Subscription = {
  __typename?: 'Subscription';
  productCreated?: Maybe<ProductPayload>;
};

export type CreateProductInput = {
  name: Scalars['String'];
};

export type CreateSubProductInput = {
  productId: Scalars['String'];
  name: Scalars['String'];
};

export type ProductInput = {
  id: Scalars['String'];
};

export type ProductPayload = {
  __typename?: 'ProductPayload';
  id: Scalars['String'];
  name: Scalars['String'];
  subProducts: Array<SubProductPayload>;
};

export type SubProductPayload = {
  __typename?: 'SubProductPayload';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  CreateProductInput: CreateProductInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  CreateSubProductInput: CreateSubProductInput;
  ProductInput: ProductInput;
  ProductPayload: ResolverTypeWrapper<ProductPayload>;
  SubProductPayload: ResolverTypeWrapper<SubProductPayload>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Mutation: {};
  Query: {};
  Subscription: {};
  CreateProductInput: CreateProductInput;
  String: Scalars['String'];
  CreateSubProductInput: CreateSubProductInput;
  ProductInput: ProductInput;
  ProductPayload: ProductPayload;
  SubProductPayload: SubProductPayload;
  Boolean: Scalars['Boolean'];
};

export type MutationResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  createProduct?: Resolver<
    ResolversTypes['ProductPayload'],
    ParentType,
    ContextType,
    RequireFields<MutationcreateProductArgs, 'input'>
  >;
  createSubProduct?: Resolver<
    ResolversTypes['SubProductPayload'],
    ParentType,
    ContextType,
    RequireFields<MutationcreateSubProductArgs, 'input'>
  >;
};

export type QueryResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  product?: Resolver<
    Maybe<ResolversTypes['ProductPayload']>,
    ParentType,
    ContextType,
    RequireFields<QueryproductArgs, 'input'>
  >;
};

export type SubscriptionResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription'],
> = {
  productCreated?: SubscriptionResolver<
    Maybe<ResolversTypes['ProductPayload']>,
    'productCreated',
    ParentType,
    ContextType
  >;
};

export type ProductPayloadResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['ProductPayload'] = ResolversParentTypes['ProductPayload'],
> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subProducts?: Resolver<
    Array<ResolversTypes['SubProductPayload']>,
    ParentType,
    ContextType
  >;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubProductPayloadResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['SubProductPayload'] = ResolversParentTypes['SubProductPayload'],
> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = MercuriusContext> = {
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  ProductPayload?: ProductPayloadResolvers<ContextType>;
  SubProductPayload?: SubProductPayloadResolvers<ContextType>;
};

export type Loader<TReturn, TObj, TParams, TContext> = (
  queries: Array<{
    obj: TObj;
    params: TParams;
  }>,
  context: TContext & {
    reply: import('fastify').FastifyReply;
  },
) => Promise<Array<import('mercurius-codegen').DeepPartial<TReturn>>>;
export type LoaderResolver<TReturn, TObj, TParams, TContext> =
  | Loader<TReturn, TObj, TParams, TContext>
  | {
      loader: Loader<TReturn, TObj, TParams, TContext>;
      opts?: {
        cache?: boolean;
      };
    };
export interface Loaders<
  TContext = import('mercurius').MercuriusContext & {
    reply: import('fastify').FastifyReply;
  },
> {
  ProductPayload?: {
    id?: LoaderResolver<Scalars['String'], ProductPayload, {}, TContext>;
    name?: LoaderResolver<Scalars['String'], ProductPayload, {}, TContext>;
    subProducts?: LoaderResolver<
      Array<SubProductPayload>,
      ProductPayload,
      {},
      TContext
    >;
  };

  SubProductPayload?: {
    id?: LoaderResolver<Scalars['String'], SubProductPayload, {}, TContext>;
    name?: LoaderResolver<Scalars['String'], SubProductPayload, {}, TContext>;
  };
}
declare module 'mercurius' {
  interface IResolvers
    extends Resolvers<import('mercurius').MercuriusContext> {}
  interface MercuriusLoaders extends Loaders {}
}
