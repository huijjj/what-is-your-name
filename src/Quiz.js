import './Quiz.css';
import React, { useEffect, useState } from 'react';
import { FaRedo } from "react-icons/fa";

function Quiz() {
    const [ score, setScore ] = useState(Number(0));
    const [ quizList, setQuizList ] = useState([]);
    const [ index, setIndex ] = useState(Number(0));
    const [ resultVisible, setResultVisible ] = useState(false);

    function getComment() {
        switch(score) {
            case -18: 
                return "와... 이건 좀... 논란이 되겠네요"
            case -16: 
                return "그래도 본인 이름은 아시네요?"
            case -14: 
            case -12: 
            case -10: 
            return "이름 좀 외워요 제발";
            case -8: 
            case -6: 
            case -4: 
            case -2: 
                return "잘 좀 해봐요";
            case 0: 
                return "반은 아시네요";
            case 2: 
            case 4: 
            case 6: 
            case 8: 
                return "뭐... 나쁘진 않네요";
            case 10: 
            case 12: 
            case 14: 
                return "그래도 대부분 아시네요";
            case 16: 
                return "한 분이 좀 서운하시겠어요?";
            case 18: 
                return "와... 쫌 치시네요";
            default:
                return "몰카인가?"
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function onSubmit(e) {
        e.preventDefault();
        
        const correct = quizList[index].answer == e.currentTarget.elements.answer.value;
        e.currentTarget.elements.answer.value = "";

        // console.log("answer handed in: ", e.currentTarget.elements.answer.value);
        // console.log("real answer: ", quizList[index].answer);
        console.log(correct ? "correct!" : "wrong!");
        setScore(score + (correct ? 1 : -1));

        // if(index == 2) {
        if(index == quizList.length - 1) {
            console.log("done");
            setResultVisible(true);
        } 
        else {
            setIndex(index + 1);
        }

        return false;
    }

    function onRetry() {
        window.location.reload();
    }

    useEffect(() => {
        setScore(0);
        setIndex(0);
        setResultVisible(false);
        setQuizList(shuffleArray([
            {
                "problem": "포항공대 19학번 ㅈㅎㅈ",
                "answer": "정희종"
            },
            {
                "problem": "카이스트 19학번 ㄱㅁㅎ",
                "answer": "김민희"
            },
            {
                "problem": "카이스트 17학번 ㅂㅅㅁ",
                "answer": "박승민"
            },
            {
                "problem": "고려대 19학번 ㄱㅁㅊ",
                "answer": "김민채"
            },
            {
                "problem": "카이스트 20학번 ㄱㅂㄱ",
                "answer": "공병규"
            },
            {
                "problem": "카이스트 17학번 ㄱㄱㅇ",
                "answer": "김기영"
            },
            {
                "problem": "유니스트 17학번 ㅊㅈㅇ",
                "answer": "최준영"
            },
            {
                "problem": "숙명여대 19학번 ㄱㅁㅈ",
                "answer": "김민정"
            },
            {
                "problem": "디지스트 19학번 ㄱㅈㅅ",
                "answer": "강준서"
            },
            {
                "problem": "카이스트 18학번 ㅂㅈㅈ",
                "answer": "박종준"
            },
            {
                "problem": "부산대 18학번 ㅂㅅㅎ",
                "answer": "박시형"
            },
            {
                "problem": "지스트 20학번 ㅂㅅㅇ",
                "answer": "배설영"
            },
            {
                "problem": "고려대 19학번 ㅈㅁㅅ",
                "answer": "조민서"
            },
            {
                "problem": "숙명여대 19학번 ㅇㅅㅈ",
                "answer": "이서진"
            },
            {
                "problem": "카이스트 19학번 ㅂㄷㅇ",
                "answer": "박도윤"
            },
            {
                "problem": "카이스트 19학번 ㅇㅅㅈ",
                "answer": "임승재"
            },
            {
                "problem": "전남대 17학번 ㅅㅎㄴ",
                "answer": "성홍념"
            },
            {
                "problem": "숙명여대 18학번 ㅇㅈㅇ",
                "answer": "윤정인"
            }
        ]));
    }, [])

    return (
        <>{
            resultVisible ? 
            <div className="result">
                <div className="result__score">{score}</div>
                <div className="result__content">
                    <div className="result__comment">{getComment()}</div>
                    <FaRedo className="result__redo" size="36" onClick={onRetry}/>
                </div>
            </div>:
            <div className="content_wrapper">
                <div className="score">{score}</div>
                <div className="quiz">
                    <div className="quiz__question">{quizList[index]?.problem}</div>
                    <form className="quiz__form" onSubmit={onSubmit} autoComplete="off">
                        <input autoFocus placeholder="What is my name?" type="text" name="answer" className="quiz__answer"></input>
                        <input className="quiz__submit" type="submit" value="OK"/>
                    </form>
                </div>
            </div>           
        }</>
    );
}

export default Quiz;
