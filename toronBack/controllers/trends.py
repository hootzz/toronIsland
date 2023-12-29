from pytrends.request import TrendReq
import pandas as pd

# Google과 연결
pytrend = TrendReq()

# 아래 코드가 일일 트렌드를 반환해 주는 코드임
# 궁금하면 실행해 보세요 
df2 = pytrend.trending_searches(pn='south_korea')
print(df2)

# 위 코드의 결과 값들을 리스트로 넣은 건데요
# 관리하기 쉽지 않겠다는 생각이 듭니다
'''
value_list = []
for index, row in df2.iterrows():
    value_list.append(row.tolist())

print(value_list)
'''


# 이건 원하는 키워드 보는 코드 : 아무 상관 없다는 뜻 걍 잼써서
'''
pytrend.build_payload(kw_list=['Messi'])
df = pytrend.interest_by_region()
print(df.head(10))
# 아래 코드는 시각화하는 건디 존만해서 안 보이니 확대 필수
# 메시라고 아르헨티나에서 많이 검색되는 거 귀엽다 
df.reset_index().plot(x='geoName', y='Messi', figsize=(120, 10), kind='bar')
'''

