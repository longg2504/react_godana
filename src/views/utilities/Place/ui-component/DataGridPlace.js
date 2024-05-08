import React from 'react';
import {
    Box,
    Avatar,
    IconButton,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function ActionButtons({ id, onEdit, onDelete }) {
    return (
      <strong>
        <IconButton onClick={() => onEdit(id)} style={{ color: 'blue' }}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(id)} style={{ color: 'red' }}>
          <DeleteIcon />
        </IconButton>
      </strong>
    );
  }

function ImageField({ value }) {
    return (
        <Avatar src={value} alt="text" sx={{ display: 'flex', alignItems: 'center' }} style={{ width: 50, height: 50, marginRight: 5 }} />
    )
}

const columns = [
    { field: 'id', headerName: 'ID', width: 30 },
    {
        field: 'image',
        headerName: 'Image',
        renderCell: ImageField,
        width: 70,
        editable: false,
    },
    {
        field: 'title',
        headerName: 'Title',
        width: 100,
        editable: false,
    },
    {
        field: 'address',
        headerName: 'Address',
        width: 200,
        editable: false,
    },

    {
        field: 'category',
        headerName: 'Category',
        width: 120,
        editable: false,
        type: 'select',
    },
    {
        field: 'opentime',
        headerName: 'Open Time',
        sortable: false,
        width: 120,
    },
    {
        field: 'closetime',
        headerName: 'Close Time',
        sortable: false,
        width: 120,
    },
    {
        field: 'phone',
        headerName: 'Phone',
        sortable: false,
        width: 110,
    },
    {
        field: 'email',
        headerName: 'Email',
        sortable: false,
        width: 150,
    },
    {
        field: 'website',
        headerName: 'Webite',
        sortable: false,
        width: 150,
    },
    {
        field: 'actions',
        headerName: 'Actions',
        sortable: false,
        width: 100,
        fixed: true,
        renderCell: (params) => (
            <ActionButtons
                id={params.row.id}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        ),
        align: 'center'
    }
];

const handleEdit = (id) => {
    console.log("Editing:", id);
    // Mở form chỉnh sửa hoặc thực hiện hành động khác
};

const handleDelete = (id) => {
    console.log("Deleting:", id);
    // Hiển thị hộp thoại xác nhận xóa hoặc thực hiện hành động khác
};
const DataGridPlace = ({ onRowClick, options }) => {

    const getAddress = (locationRegion) => {
        const parts = [locationRegion?.address, locationRegion?.districtName, locationRegion?.wardName];
        return parts.filter(Boolean).join(', '); // Only join non-falsy values
    };

    // Map places to rows here
    const rows = options.map((place) => ({
        id: place.id,
        image: place.placeAvatar?.[0]?.fileUrl || 'defaultImageUrl',
        title: place.placeTitle,
        address: getAddress(place.locationRegion),
        longitude: place.longitude,
        latitude: place.latitude,
        category: place.category.title,
        email: place.contact.email,
        phone: place.contact.phone,
        website: place.contact.website,
        opentime: place.contact.openTime,
        closetime: place.contact.closeTime,

    }));

    return (
        <Box sx={{ height: 500, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[10]}
                checkboxSelection
                disableRowSelectionOnClick
                onRowClick={onRowClick}
            />
        </Box>
    );
}
export default DataGridPlace;