import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import users from "../../api/users";
interface Users {
  id: string;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  userTag: string;
  department: string;
  position: string;
  birthday: string;
  phone: string;
}
type UsersState = {
  list: Users[];
  listCopy: Users[];
  loading: boolean;
  error: string | unknown;
  isModalOpen: boolean;
  isAlphabetSort: boolean;
  isDateSort: boolean;
  filter: string;
  notFound: boolean;
};
const initialState: UsersState = {
  list: [],
  listCopy: [],
  loading: false,
  error: null,
  isModalOpen: false,
  isAlphabetSort: true,
  isDateSort: false,
  filter: "",
  notFound: false,
};
export const getUsers = createAsyncThunk(
  "users/get-users",
  async (_, { rejectWithValue }) => {
    try {
      const res = await users.getUsersAPI();
      console.log(res.data);
      return res.data.items;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
export const getUsersDesigners = createAsyncThunk(
  "users/get-users-designers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await users.getUsersDesignersAPI();
      console.log(res.data);
      return res.data.items;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
export const getUsersAnalytics = createAsyncThunk(
  "users/get-users-analytics",
  async (_, { rejectWithValue }) => {
    try {
      const res = await users.getUsersAnalyticsAPI();
      console.log(res.data);
      return res.data.items;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
export const getUsersManagement = createAsyncThunk(
  "users/get-users-management",
  async (_, { rejectWithValue }) => {
    try {
      const res = await users.getUsersManagementAPI();
      console.log(res.data);
      return res.data.items;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
export const getUsersIos = createAsyncThunk(
  "users/get-users-ios",
  async (_, { rejectWithValue }) => {
    try {
      const res = await users.getUsersIosAPI();
      console.log(res.data);
      return res.data.items;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
export const getUsersAndroid = createAsyncThunk(
  "users/get-users-android",
  async (_, { rejectWithValue }) => {
    try {
      const res = await users.getUsersAndroidAPI();
      console.log(res.data);
      return res.data.items;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    alphabetSort: (state) => {
      state.isDateSort = false;
      state.isAlphabetSort = true;
      state.list.sort((a, b) =>
        a.firstName > b.firstName ? 1 : -1
      );
    },
    dateSort: (state) => {
      state.isDateSort = true;
      state.isAlphabetSort = false;
      state.list.sort(
        (a, b) =>
          Date.parse(b.birthday) - Date.parse(a.birthday)
      );
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
      if (state.filter === "") {
        state.list = state.listCopy;
        state.notFound = false;
      } else if (
        state.list.find(
          (el) =>
            el.firstName.toLowerCase() ===
            action.payload.toLowerCase()
        )
      ) {
        state.list = state.list.filter(
          (el) =>
            el.firstName.toLowerCase() ===
            action.payload.toLowerCase()
        );
        state.notFound = false;
      } else if (
        state.list.find(
          (el) =>
            el.lastName.toLowerCase() ===
            action.payload.toLowerCase()
        )
      ) {
        state.list = state.list.filter(
          (el) =>
            el.lastName.toLowerCase() ===
            action.payload.toLowerCase()
        );
        state.notFound = false;
      } else if (
        state.list.find(
          (el) =>
            el.userTag.toLowerCase() ===
            action.payload.toLowerCase()
        )
      ) {
        state.list = state.list.filter(
          (el) =>
            el.userTag.toLowerCase() ===
            action.payload.toLowerCase()
        );
        state.notFound = false;
      } else {
        state.notFound = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.sort(
          (a: Users, b: Users) =>
            a.firstName > b.firstName ? 1 : -1
        );
        state.listCopy = action.payload.sort(
          (a: Users, b: Users) =>
            a.firstName > b.firstName ? 1 : -1
        );
      })
      .addCase(getUsersDesigners.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getUsersDesigners.rejected,
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      )
      .addCase(
        getUsersDesigners.fulfilled,
        (state, action) => {
          state.loading = false;
          state.list = action.payload.sort(
            (a: Users, b: Users) =>
              a.firstName > b.firstName ? 1 : -1
          );
          state.listCopy = action.payload.sort(
            (a: Users, b: Users) =>
              a.firstName > b.firstName ? 1 : -1
          );
        }
      )
      .addCase(getUsersAnalytics.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getUsersAnalytics.rejected,
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      )
      .addCase(
        getUsersAnalytics.fulfilled,
        (state, action) => {
          state.loading = false;
          state.list = action.payload.sort(
            (a: Users, b: Users) =>
              a.firstName > b.firstName ? 1 : -1
          );
          state.listCopy = action.payload.sort(
            (a: Users, b: Users) =>
              a.firstName > b.firstName ? 1 : -1
          );
        }
      )
      .addCase(getUsersManagement.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getUsersManagement.rejected,
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      )
      .addCase(
        getUsersManagement.fulfilled,
        (state, action) => {
          state.loading = false;
          state.list = action.payload.sort(
            (a: Users, b: Users) =>
              a.firstName > b.firstName ? 1 : -1
          );
          state.listCopy = action.payload.sort(
            (a: Users, b: Users) =>
              a.firstName > b.firstName ? 1 : -1
          );
        }
      )
      .addCase(getUsersIos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsersIos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getUsersIos.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.sort(
          (a: Users, b: Users) =>
            a.firstName > b.firstName ? 1 : -1
        );
        state.listCopy = action.payload.sort(
          (a: Users, b: Users) =>
            a.firstName > b.firstName ? 1 : -1
        );
      })
      .addCase(getUsersAndroid.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getUsersAndroid.rejected,
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      )
      .addCase(
        getUsersAndroid.fulfilled,
        (state, action) => {
          state.loading = false;
          state.list = action.payload.sort(
            (a: Users, b: Users) =>
              a.firstName < b.firstName ? 1 : -1
          );
          state.listCopy = action.payload.sort(
            (a: Users, b: Users) =>
              a.firstName < b.firstName ? 1 : -1
          );
        }
      );
  },
});
export default usersSlice.reducer;

export const {
  toggleModal,
  alphabetSort,
  dateSort,
  changeFilter,
} = usersSlice.actions;
