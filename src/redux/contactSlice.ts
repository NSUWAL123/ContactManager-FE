import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { contactType, contactStateType } from "../interface/contactType";

const ContactSlice = createSlice({
  name: "contactSlice",
  initialState: {
    data: [] as contactType[],
  },
  reducers: {
    setContactData: (
      state: contactStateType,
      action: PayloadAction<contactType[]>
    ) => {
      state.data = action.payload;
    },
  },
});

export const { setContactData } = ContactSlice.actions;
export default ContactSlice.reducer;
