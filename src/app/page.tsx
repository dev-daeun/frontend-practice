export default function CenteredCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm overflow-hidden">
        {/* 이미지 섹션 */}
        <div className="relative h-64">
          <img src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=2151&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div>
        
        {/* 텍스트 콘텐츠 섹션 */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            2024년 기술 동향
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            최신 기술 동향에 대한 기사를 통해 혁신적인 아이디어와 
            트렌드를 탐구해보세요. 이 글에서는 인공지능과 머신러닝의 
            발전이 우리 생활에 미치는 영향을 다룹니다.
          </p>
          <button className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            더보기
          </button>
        </div>
      </div>
    </div>
  );
}
