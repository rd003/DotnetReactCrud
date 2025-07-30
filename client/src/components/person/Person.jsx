import { useEffect, useState } from "react"
import PersonForm from "./PersonForm"
import PersonList from "./PersonList"
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';
import axios from "axios";

function Person() {
    const BASE_URL = import.meta.env.VITE_BASE_API_URL + '/people';

    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editData, setEditData] = useState(null);

    useEffect(() => {
        try {
            const loadPeople = async () => {
                var peopleData = (await axios.get(BASE_URL)).data;
                setPeople(peopleData);
            }
            loadPeople();
        } catch (error) {
            console.log(error);
            toast.error("Error has occured!");
        }
        finally {
            setLoading(false);
        }

    }, []);

    useEffect(() => {
        methods.reset(editData);
    }, [editData])

    const defaultFormValues = {
        id: 0,
        firstName: '',
        lastName: ''
    }

    const methods = useForm({
        defaultValues: defaultFormValues
    });



    const handleFormReset = () => {
        methods.reset(defaultFormValues);
    }


    const handleFormSubmit = async (person) => {
        setLoading(true);
        try {
            if (person.id <= 0) {
                const createdPerson = (await axios.post(BASE_URL, person)).data;
                setPeople((previousPerson) => [...previousPerson, createdPerson]);
            }
            else {
                await axios.put(`${BASE_URL}/${person.id}`, person);
                setPeople((previousPeople) => previousPeople.map(p => p.id === person.id ? person : p));
            }
            methods.reset(defaultFormValues);
            toast.success("Saved successfully!");
        } catch (error) {
            console.log(error);
            toast.error("Error has occured!");
        }
        finally {
            setLoading(false);
        }
    }

    const handlePersonEdit = (person) => {
        setEditData(person);
    }

    const handlePersonDelete = async (person) => {
        if (!confirm(`Are you sure to delete a person : ${person.firstName} ${person.lastName}`)) return;
        setLoading(true);
        try {
            await axios.delete(`${BASE_URL}/${person.id}`);
            setPeople((previousPerson) => previousPerson.filter(p => p.id !== person.id));
            toast.success("Deleted successfully!");
        } catch (error) {
            toast.error("Error on deleting!");
        }
        finally {
            setLoading(false);
        }

    }
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Person Management
                    </h1>
                    {loading && <p>Loading...</p>}
                </div>

                <PersonForm methods={methods} onFormSubmit={handleFormSubmit} onFormReset={handleFormReset} />
                <PersonList peopleList={people} onPersonEdit={handlePersonEdit} onPersonDelete={handlePersonDelete} />
            </div>
        </div>
    )
}

export default Person