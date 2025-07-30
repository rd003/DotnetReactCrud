import PersonForm from "./PersonForm"
import PersonList from "./PersonList"
import { useForm } from "react-hook-form"

function Person() {
    const defaultFormValues = {
        id: 0,
        firstName: '',
        lastName: ''
    }

    const methods = useForm({
        defaultValues: defaultFormValues
    });

    const people = [
        { id: 1, firstName: 'John', lastName: 'Doe' },
        { id: 2, firstName: 'John 1', lastName: 'Doe 1' },
        { id: 3, firstName: 'John 2', lastName: 'Doe 2' },
    ]

    const handleFormReset = () => {
        methods.reset(defaultFormValues);
    }


    const handleFormSubmit = (data) => {
        console.log(data);
    }

    const handlePersonEdit = (person) => {
        console.log(person);
    }

    const handlePersonDelete = (person) => {
        if (!confirm(`Are you sure to delete a person : ${person.firstName} ${person.lastName}`)) return;

        console.log(person);
    }
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Person Management
                    </h1>

                </div>

                <PersonForm methods={methods} onFormSubmit={handleFormSubmit} onFormReset={handleFormReset} />
                <PersonList peopleList={people} onPersonEdit={handlePersonEdit} onPersonDelete={handlePersonDelete} />
            </div>
        </div>
    )
}

export default Person