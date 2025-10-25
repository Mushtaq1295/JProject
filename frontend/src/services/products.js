import api from "./api";

export const fetchProducts = () => api.get("/products");
export const fetchProduct = (id) => api.get(`/products/${id}`);
export const createProduct = (data) => api.post("/products", data);
export const updateProduct = (id, data) => api.put(`/products/${id}`, data);
export const deleteProduct = (id) => api.delete(`/products/${id}`);


// import api from "./api";

// export const fetchProducts  = () => api.get("/product");
// export const fetchProduct   = (id) => api.get(`/product/${id}`);
// export const createProduct  = (data) => api.post("/product", data); // POST /product
// export const updateProduct  = (id, data) => api.put(`/product/${id}`, data);
// export const deleteProduct  = (id) => api.delete(`/product/${id}`);

