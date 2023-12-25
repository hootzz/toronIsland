// express 환경 설정
const express = require('express');
// open api module 가져오기 
const mysql = require('mysql2');
const axios = require('axios'); // axios 라이브러리 추가
const cors = require('cors');
const app = express();
const port = 3000; 

// cross origin resource sharing 활성화하는 미들웨어
// 다른 도메인끼리의 요청을 허용함 
app.use(cors());


const getRandomDebateTopic = () => {
    const randomTopics = ['요즘 사회 문제에 관란 주제 한 개만 보내는데, 대답도 다 제외하고 ~에 대해 어떻게 생각하시나요?의 형태로 보내고, 50글자 이내로 부탁해',
                            '찬성 반대로 나눌 수 있는 재미있는 토론 주제 한 개만 보내는데, 대답도 다 제외하고 ~에 대해 어떻게 생각하시나요?의 형태로 보내는데 예시도 함께 들어 줘100글자 이내로 부탁해 ',
                            '사랑 관련한 토론 주제 한 개만 보내는데, 대답도 다 제외하고 해당 ~에 대해 어떻게 생각하시나요?의 형태로 50글자 이내로 보내 줘 '];
    // 위 배열의 값들 길이만큼의 인덱스 값들을 랜덤으로 부여 
    const randomIndex = Math.floor(Math.random() * randomTopics.length);
    // 배열 랜덤 주제 return 
    return randomTopics[randomIndex];
  }; // 반환 값 형태 -> 배열[...length]


const apiKey = '#';
const getGPTResponse = async (topic) => {
    const requestOptions = {
        method: 'POST',
        // http header : 클라이언트와 서버가 요청 또는 응답으로 
        // 부가적인 정보를 전송할 수 있도록 해 줌 
        headers: {
            'Content-Type':'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        // http body : 해당 요청에 대한  실제 메시지/내용을 전송
        // JSON.stringify : json 객체 만듦 
        body: JSON.stringify({
            // 사용할 ai 모델
            model: 'gpt-3.5-turbo',
            message: [{
                //role: "user",
                content: topic
            },],
            // 모델의 출력 다양성 
            temperature: 0.8, 
            // 응답 받을 message 최대 단어 수 
            max_tokens: 100,
            // 토큰 샘플링 확률 
            top_p: 1,
            //  일반적으로 나오지 않는 단어를 억제하는 정도 
            frequency_penalty: 0.5, 
            // 동일한 단어, 구문이 반복되는 걸 억제하는 정도
            presence_penalty: 0.5

        })
    }
    try{
        // axios의 post method를 사용해 POST 요청 생성 
        // '키' : 요청을 보낼 URL 
        // 두 번째 매개변수 : 요청 body에 해당 
        // 서버로 전송할 내용 
        const response = await axios.post('키', {
            prompt: topic, // 우리가 보내는 메시지 

        }, requestOptions);
        return response.data.choice[0].text;
    }catch(error){
        console.log(error);
        throw error;
    }
};

// end 처리 
// Express 애플리케이션이 JSON 형식의 데이터를 파싱할 수 있도록 설정하는 미들웨어
app.use(express.json());

// 라우트 : getRandomDebateTopic 엔드 포인트에 대한 GET 요청 처리 
app.get('/getRandomDebateTopic', async(req, res)=> {
    
    try{
        const query = 'SELECT * FROM 테이블 ORDER BY RAND() LIMIT 1'
        
        // connection.query문을 첨에 썼는디 동기적인 코드가 됨
        // async와 await는 비동기적임 
        // -> connection.query를 프로미스를 반환하는 형태로 바꿈
        // 너무 어려움 
        const results = await queryAsync(query);
        
        if (results.length === 0){
            return res.status(404).json({error: 'No data Found'});
        }

        // 랜덤 토론 주제 생성 
        const debateTopic = getRandomDebateTopic();
        // gpt 모델에게 생성된 토론 주제에 대한 응답을 가져옴 
        const gptResponse = await getGPTResponse(debateTopic);
        // 생성된 토론 주제와 gpt 응답을 JSON 형식으로 보냄 
        res.json({debateTopic, gptResponse});
       

      
    }catch{
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});


// express의 server 문법 
// app.listen 내부에서 http 모듈로 감싼 후 return 
// 내부적으로 http 모듈을 쓰는 것
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})