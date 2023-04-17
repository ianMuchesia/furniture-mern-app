const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
  try {
    req.body.user = req.user.userId;
    const product = await Product.create(req.body);
    res.status(StatusCodes.CREATED).json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: `something wrong happened, try again later` });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const { id: productId } = req.params;
    const product = await Product.findOne({ _id: productId });
    if (!product) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: `no product found matching id:${productId}` });
    }
    res.status(StatusCodes.OK).json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: `something wrong happened try again later` });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id: productId } = req.params;

    const product = await Product.findByIdAndUpdate(
      { _id: productId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!product) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: `no product found matching id:${productId}` });
    }

    res.status(StatusCodes.OK).json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: `something wrong happened try again later` });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id: productId } = req.params;

    const product = await Product.findOneAndRemove({ _id: productId });

    if (!product) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: `no product found matching id:${productId}` });
    }

    res.status(StatusCodes.OK).json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: `something wrong happened try again later` });
  }
};

const getAllProductsByCategory = async (req, res) => {
  try {
    const { featured, category, search, sort, fields, numericFilters, page } =
      req.query;

    const queryObject = {};
    //featured
    if (featured) {
      queryObject.featured = featured === "true" ? true : false;
    }
  
    //category
    if (category) {
      queryObject.category = category;
    }
    //search for an item
    if (search) {
      queryObject.name = { $regex: search, $options: "i" };
    }
    if (numericFilters) {
      const opertorMap = {
        ">": "$gt",
        ">=": "$gte",
        "=": "$eq",
        "<": "$lt",
        "<=": "$lte",
      };
      const regEx = /\b(<|>|>=|=|<|<=)\b/g;
      let filters = numericFilters.replace(
        regEx,
        (match) => `-${opertorMap[match]}-`
      );
      const options = ["price", "rating"];
      filters = filters.split(",").forEach((item) => {
        const [field, operator, value] = item.split("-");
        if (options.includes(field)) {
          queryObject[field] = { [operator]: Number(value) };
        }
      });
      //console.log(queryObject)
    }

    let result = Product.find(queryObject);
    if (sort) {
      const sortArray = sort.split(",").join(" ");
      result = result.sort(sortArray);
    } else {
      result = result.sort("createdAt");
    }
    //select the only one you want to see
    if (fields) {
      const fieldList = fields.split(",").join(" ");
      result = result.select(fieldList);
    }
    //setting up pagination functionality
    if (page) {
      const pagination = Number(page);
      const limit = Number(req.query.limit) || 9;
      const skip = (pagination - 1) * limit;

      result = result.skip(skip).limit(limit);
    }

    const products = await result;
    res
      .status(200)
      .json({ success: true, msg: products, nbHits: products.length });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: `something wrong happened try again later` });
  }
};

module.exports = {
  getAllProductsByCategory,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,

};
