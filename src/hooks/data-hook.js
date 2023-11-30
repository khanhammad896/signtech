import { useMutation, useQuery } from "react-query";
import { API_ENDPOINTS } from "../utils/variables";
import http from "../utils/http";

//Get All Contracts
const getContracts = async () => {
  const { data } = await http.get(API_ENDPOINTS.CONTRACT);
  return data;
};

// Get Contract by id
const getContractById = async (id) => {
  const { data } = await http.get(`${API_ENDPOINTS.CONTRACT}/${id}/invite`);
  return data;
};

// Delete Contract
const deleteContract = async (id) => {
  const { data } = await http.delete(`${API_ENDPOINTS.CONTRACT}/${id}`);
  return data;
};

// File Preview
const getFilePreview = async (id) => {
  const { data } = await http.get(`${API_ENDPOINTS.FILE}/f/view/preview.pdf`, {
    params: {
      id,
    },
    responseType: "blob",
  });
  return data;
};

// Invite customer to contracts
const inviteCustomer = async ({ id, input }) => {
  const { data } = await http.post(
    `${API_ENDPOINTS.CONTRACT}/${id}/invite`,
    input
  );
  return data;
};

//Create New Contract
const createContract = async (uData) => {
  const { data } = await http.post(API_ENDPOINTS.CONTRACT, uData);
  return data;
};

// Get Templates
const getTemplates = async () => {
  const { data } = await http.get(API_ENDPOINTS.TEMPLATE);
  return data;
};

// Sign Contract
const signContract = async (input) => {
  const { data } = await http.post(
    `${API_ENDPOINTS.CONTRACT}/${input.contractId}/invite/${input.inviteId}/status`,
    input.data
  );
  return data;
};

// Upload template
const uploadTemplate = async (input) => {
  const { data } = await http.post(API_ENDPOINTS.TEMPLATE, input);
  return data;
};

// Delete template
const deleteTemplate = async (id) => {
  const { data } = await http.delete(`${API_ENDPOINTS.TEMPLATE}/${id}`);
  return data;
};
export const useGetContracts = () => {
  return useQuery("get-contracts", getContracts, {
    retry: false,
  });
};

export const useCreateContract = () => {
  return useMutation(createContract);
};

export const useGetContractById = (id) => {
  return useQuery("get-contract-by-id", () => getContractById(id));
};

export const useDeleteContract = () => {
  return useMutation(deleteContract);
};

export const useGetFilePreview = (id) => {
  return useQuery("file-preview", () => getFilePreview(id));
};

export const useInviteCustomer = () => {
  return useMutation(inviteCustomer);
};

export const useGetTemplates = () => {
  return useQuery("templates", getTemplates);
};

export const useSignContract = () => {
  return useMutation(signContract);
};

export const useUploadTemplate = () => {
  return useMutation(uploadTemplate);
};

export const useDeleteTemplate = () => {
  return useMutation(deleteTemplate);
};
