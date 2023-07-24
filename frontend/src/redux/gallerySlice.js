import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getDataAsync = createAsyncThunk(
    'gallery/getDataAsync',
    async () => {
        const response = await fetch('http://127.0.0.1:5000/painting');
        if (response.ok) {
            const data = await response.json();
            return { data }
        }
    }
);

export const paintReservedPatchAsync = createAsyncThunk(
    'gallery/paintReservedAsync',
    async (payload) => {
        const resp = await fetch(`http://127.0.0.1:5000/update/${payload.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cart: payload.cart, reserved: payload.reserved, registerNum: payload.registerNum }),
        });

        if (resp.ok) {
            const reservedPainting = await resp.json();
            return { reservedPainting };
        }
    }
);

export const addReservedPaintAsync = createAsyncThunk(
    'gallery/addReservedPaintAsync',
    async (payload) => {
        const resp = await fetch('http://127.0.0.1:5000/reserved', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (resp.ok) {
            const reservedPainting = await resp.json();
            return { reservedPainting };
        }
    }
);

export const addCustomerAsync = createAsyncThunk(
    'gallery/addCustomerAsync',
    async (payload) => {
        const resp = await fetch('http://127.0.0.1:5000/customer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (resp.ok) {
            const new_customer = await resp.json();
            return { new_customer };
        }
    }
);

export const addFanAsync = createAsyncThunk(
    'gallery/addFanAsync',
    async (payload) => {
        const resp = await fetch('http://127.0.0.1:5000/fan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (resp.ok) {
            const new_fan = await resp.json();
            return { new_fan };
        }
    }
);

export const deleteReservedAsync = createAsyncThunk(
    'gallery/deleteReservedAsync',
    async (payload) => {
        const resp = await fetch(`http://127.0.0.1:5000/delete-paintingReserved/${payload.paintId}`, {
            method: 'DELETE',
        });

        if (resp.ok) {
            return { paintId: payload.paintId };
        }
    }
);

const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        paintingsData: [],
        artSold: [],
        addedPainting: [],
        clientAllData: [],
        fanAllData: [],
        alreadyAdded: false,
        isLoading: true,
        registerNum: null,
        reservedPaintings: [],
    },
    reducers: {
        deletePainting: (state, action) => {
            console.log("action payload id", action.payload.id)
            console.log("action payload paintId", action.payload.paintId)
            state.addedPainting = state.addedPainting.filter(paint => paint.paintId !== action.payload.paintId);
        },
        addClientData: (state, action) => {
            state.clientAllData = action.payload;
        },
        switchFalse: (state) => {
            state.alreadyAdded = false;
        },
        resetAddedPainting: (state) => {
            state.addedPainting = [];
            state.registerNum = null;
            state.clientAllData = [];
            state.reservedPaintings = []
        },
        getRegisterNum: (state, action) => {
            if (state.registerNum === null) {
                state.registerNum = action.payload
            }
        },

    },
    extraReducers: {
        [getDataAsync.pending]: (state, action) => {
            console.log('fetching data...');
            state.isLoading = true;
        },
        [getDataAsync.fulfilled]: (state, action) => {
            console.log('Data fetched successfully!')
            console.log("get data action payload", action.payload)
            const allPaintings = action.payload.data
            state.paintingsData = allPaintings.filter(paint => paint.sold === false)

            state.addedPainting = allPaintings.filter(paint => paint.cart === true)

            state.artSold = allPaintings.filter(paint => paint.sold === true)

            state.isLoading = false;
            return action.payloads;
        },
        [paintReservedPatchAsync.fulfilled]: (state, action) => {
            console.log("patch reserved and cart", action.payload.reservedPainting)
            console.log("patch reserved and cart id", action.payload.reservedPainting.id)
            let updatedDataPaintings = state.paintingsData.map(painting => {
                if (painting.id === action.payload.reservedPainting.id) {
                    painting.reserved = !painting.reserved;
                }
                return painting;
            });
            state.paintingsData = updatedDataPaintings;
        },
        [addReservedPaintAsync.fulfilled]: (state, action) => {
            state.addedPainting.push(action.payload.reservedPainting);
        },
        [deleteReservedAsync.fulfilled]: (state, action) => {
            console.log("delete", action.payload.paintId)
            state.alreadyAdded = false;
            // let deletedPainting = state.addedPainting.filter(paint => paint.paintId !== action.payload.paintId || paint.id !== action.payload.paintId);
            // state.addedPainting = deletedPainting
        },
        [addCustomerAsync.fulfilled]: (state, action) => {
            state.clientAllData = action.payload;
        },
        [addFanAsync.fulfilled]: (state, action) => {
            console.log("fan added", action.payload.new_fan)
            state.fanAllData = '';
        },
    }
});


export const { deletePainting, addClientData, switchFalse, resetAddedPainting, getRegisterNum } = gallerySlice.actions;

export default gallerySlice.reducer;