import { createModel, PrismaModel } from 'schemix';

import ProductModel from './Product.model';

const SubProductModel: PrismaModel = createModel((SubProductModel) =>
  SubProductModel.string('id', { id: true, default: { uuid: true } })
    .string('name', { unique: true })
    .string('productId')
    .relation('product', ProductModel, {
      fields: ['productId'],
      references: ['id'],
    }),
);

export default SubProductModel;
