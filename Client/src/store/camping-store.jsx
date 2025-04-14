import { create } from "zustand";
import {
  addOrRemoveFavorite,
  filterCamping,
  listCamping,
  listCampingUser,
  readCamping,
} from "../api/camping";

const campingStore = (set, get) => ({
  //ดึงข้อมูลcampingมาแสดงทั้งหมด
  campings: [],
  readcamping: [],
  actionListCamping: async (id) => {
    try {
      const res = await listCamping(id);
      // console.log(res.data.result);
      set({
        campings: res.data.result,
      });
    } catch (error) {
      console.log(error);
    }
  },
  actionReadCamping: async (id) => {
    try {
      const res = await readCamping(id);
      set({
        readcamping: res.data.result,
      });
    } catch (error) {
      console.log(error);
    }
  },
  //ลบปุ่มหัวใจ
  actionAddorRemoveFavorite: async (token, data) => {
    try {
      const res = await addOrRemoveFavorite(token, data);
      const camping = get().campings;
      const updatedCamping = camping.map((item) => {
        return item.id === data.campingId
          ? { ...item, isFavorite: !data.isFavorite }
          : item;
      });
      set({
        campings: updatedCamping,
      });
      return { success: true, message: res.data.message };
    } catch (error) {
      console.log(error?.response?.data?.message);
      return { success: false, message: error?.response?.data?.message };
    }
  },
  //ดึงข้อมูลcampingมาแสดงเฉพราะuser
  campingUsers: [],
  actionListCampingUser: async (token, id) => {
    try {
      const res = await listCampingUser(token, id);
      set({
        campingUsers: res.data.result,
      });
    } catch (error) {
      console.log(error);
    }
  },
  actionDeleteCampingUser: (id) => {
    const campingUsers = get().campingUsers;
    const updatedCampingUsers = campingUsers.filter((camp) => camp.id !== id);
    set({ campingUsers: updatedCampingUsers });
  },
  actionFilter: async (category = "", search = "") => {
    try {
      const res = await filterCamping(category, search);
      set({ campings: res.data.result });
    } catch (error) {
      console.log(error);
    }
  },
});
const useCampingStore = create(campingStore);

export default useCampingStore;
