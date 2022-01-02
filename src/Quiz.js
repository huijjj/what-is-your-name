import React, { useEffect, useState } from 'react'

function Quiz() {
    const [ score, setScore ] = useState(Number(0));
    const [ quizList, setQuizList ] = useState([]);
    const [ index, setIndex ] = useState(Number(0));



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
        console.log(correct);

        if(index == quizList.length - 1) {
            console.log("done");
        } 
        else {
            setScore(score + (correct ? 1 : -1));
            setIndex(index + 1);
        }

        return false;
    }

    useEffect(() => {
        setScore(0);
        setIndex(0);
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
        <div className="Quiz">
            <div className="Score">{score}</div>
            <div className="Question">{quizList[index]?.problem}</div>
            <form onSubmit={onSubmit} autoComplete="off">
                <input type="text" name="answer" className="Answer"></input>
            </form>
        </div>
    );
}

export default Quiz;
