import { createModel, PrismaModel } from 'schemix';

const ProductModel: PrismaModel = createModel((ProductModel) =>
  ProductModel.string('id', { id: true, default: { uuid: true } }).string(
    'name',
    { unique: true },
  ),
);

export default ProductModel;
