import { Button, CardGroup, Modal } from 'react-bootstrap';
import CardResume from './CardResume/CardResume';
import CardResumeHobbies from './CardResume/CardResumeHobbies';

export default function Resume({showModal, setModal, setStep}) {

    const favoriteFruit = localStorage.getItem("fruitName");
    const favoriteIcon = localStorage.getItem("iconFruit");
    const hobbiesStorage = JSON.parse(localStorage.getItem('hobbies'));
    const additionalStorage = localStorage.getItem("additionalHobbie");
    const comment = localStorage.getItem("comment");

    const clearForm = () => {
        localStorage.clear();
        setModal(false);
        setStep(1);

    }

  return (
    <div>
        <Modal 
            show={showModal}
            size='lg'
            aria-labelledby="contained-modal-title-center"
            centered
            onHide={clearForm}
        >
        <Modal.Header closeButton>
            <Modal.Title>
                Congratulations 🙋🏼
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Here you are your resume</h4>
            <CardGroup className='mt-4'>
                {
                    favoriteFruit && favoriteIcon && (
                        <CardResume 
                        title={favoriteIcon} 
                        subtitle={"Your favorite fruit is"}
                        text={favoriteFruit}
                        />
                    )
                }
                {
                    hobbiesStorage && (
                        <CardResumeHobbies 
                        subtitle={"Your hobbies"} 
                        text={additionalStorage}
                        hobbiesStorage={hobbiesStorage}
                        />
                    )
                }
                {
                    comment && (
                        <CardResume subtitle="And for the last this is the comment" text={comment} />
                    )
                }
            </CardGroup>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={clearForm} variant='outline-dark'>
                Exit and clear form
            </Button>
        </Modal.Footer>
        </Modal>
    </div>
  )
}
