import * as yup from 'yup';

const schema = yup.object().shape({
    title: yup.string().required('Title is required'),
    author: yup.string().required('Author is required'),
    category: yup.string().required('Genre is required'),
    description: yup.string().min(3).max(30).required('Description is required'),
    rating: yup.string().min(1).max(5),
    cover: yup.string().url('Invalid URL').required('Cover image URL is required'),
});

export default schema;