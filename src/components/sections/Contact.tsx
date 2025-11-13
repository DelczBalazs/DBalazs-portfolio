import Button from '../Button'
import { ColorfulText } from '../ui/visuals/ColorfulText'

const Contact = () => {

    return (
        <div id='contact' className="mx-auto flex min-h-90% max-w-5xl flex-col justify-center px-6 py-20 sm:py-28">
            <div className='flex justify-center flex-col items-center'>
                <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-5xl hover-glow">
                    <ColorfulText text='Contact me'></ColorfulText>
                </h2>
                <div>
                    <a title='Send an email' key={"send email button"} href='mailto:dbalazsworkemail@gmail.com'>
                        <Button aria-label='emailButton' children='Send an Email' className='mt-6 text-lg' />
                    </a>
                    <a title='Write on LinkedIn' key={"Write on LinkedIn button"} target='_blank' href='https://www.linkedin.com/in/delczegb/'>
                        <Button aria-label='linkedinButton' children='Write on LinkedIn' className='mt-6 text-lg' />
                    </a>
                    <a title='Back to top' key={"back to top"} href='/#'>
                        <Button aria-label='backHomeButton' children='Back to top' className='mt-6 text-lg' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact

