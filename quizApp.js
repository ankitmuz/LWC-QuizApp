import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
   selected={} // store answers
   correctAnswers = 0 // to show the no of correct answers
   isSubmitted = false // use to show the result
    myQuestions=[
        {
            id:"Question1",
            question:"Which one of the following is not a template loop? ",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"Map"
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question:"Which one of the following is invalid in LWC component folder? ",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question:"Which one of the following is not a directive? ",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }
    ]

    // used for disabling the submit button 
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }

    // for applying dynamic styling to our result
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?
            'slds-text-color_success':'slds-text-color_error'}`
    }

    // change Handler get's called on every click on the options 
    changeHandler(event){
        // console.log("Name", event.target.name)
        // console.log("value", event.target.value)
        // const {name, value}=event.target //( using object de-structuring)
        const name = event.target.name
        const value = event.target.value
        this.selected={...this.selected, [name]:value} // it will work this.selected={...this.selected, [Question number]:"a"} whatever value will select that will apper in value.
        // this.selected={"Question1":b} if we change the value update value will appear like b to c or c to a.

    }

    // form submite Handaler
    submiteHandaler(event){
        event.preventDefault()
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
         this.correctAnswers = correct.length
        this.isSubmitted = true
        // console.log("Correct Answer is", this.correctAnswer)
    }
    // form reset handler
    resetHandaler(){
        this.selected = {}
        this.correctAnswers = 0
        this.isSubmitted = false
    }
    

 
}