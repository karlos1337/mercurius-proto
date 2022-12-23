import { createModel, PrismaModel } from 'schemix';

import SubProductModel from './SubProduct.model';

const ProductModel: PrismaModel = createModel((ProductModel) =>
  ProductModel.string('id', { id: true, default: { uuid: true } })
    .string('name', { unique: true })
    .relation('subProducts', SubProductModel, { list: true }),
);

export default ProductModel;
