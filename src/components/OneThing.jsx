import CustomButton from './CustomButton'

const OneThing = ({ thing, handleCompletedThing  }) => {
    return (
        <>
            <h1 className='text-3xl sm:text-4xl font-bold text-center mb-8 sm:leading-normal'>{thing}</h1>
            <CustomButton text="Mark Done" handleCompletedThing={handleCompletedThing} />
        </>
    )
}

export default OneThing