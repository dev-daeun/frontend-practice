export default function Home() {
    return (
        <>
        <div className="p-4">
            <div>그라데이션 동그라미</div>
                         {/*                                 가/세 크기  가장자리 둥근 정도   그라데이션 방향        시작 색깔        중간 색깔     중간색깔 퍼센트  끝 섹갈 */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-blue-700 via-blue-700 via-30% to-blue-100">
            </div>
        </div>
        <div className="flex h-screen items-center justify-center">
                            {/* 텍스트크기  폰트굵기    글자 잘림 방지    그라데이션 방향     시작 색깔           끝 색깔     배경을 글자 모양으로 자르기  글자 투명하게 처리  */}
            <span className="text-9xl font-bold leading-normal bg-linear-to-r from-[#15c064] to-[#00d1ff] bg-clip-text text-transparent">Codify</span>
        </div>
        </>


    );
  }
