import React from 'react';
import { Button, Card } from '../../components';
import {
    SearchIcon,
    NextArrow,
    PrevArrow,
    MenuIcon,
    WalletIcon,
    PencilIcon,
    TrendingIcon,
    StatisticsIcon,
    SearchBlue,
    ArrowIcon,
    Facebook,
    Instagram,
    Twitter,
    People,
    PhoneMessage,
    Person
} from '../../svgicons';
import Slider from 'react-slick';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import playStore from '../../images/playStore.png';
import qrCode from '../../images/qrCode.png';
import apple from '../../images/apple.png';
import appView from '../../images/appView.png';
import creditCard from '../../images/creditCard.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useHistory } from "react-router-dom";

const Landing = () => {
    const history = useHistory();
    return (
        <main>
            <section className="bg-background2 pb-20 bg-cover mb-10 pb-10 z-50 bg-bottom relative">
                <div className="flex flex-col gap-10 mx-auto items-center p-12 w-4/5 text-center">
                    <h1 className="text-white mx-auto text-4xl mt-20">
                        비트코스트 장외거래 플랫폼이 곧 출시 됩니다. 사전가입하시고 이벤트
                        혜택을 누리세요!
                    </h1>
                    <Button variant="filled" size="medium" textColor="white" onClick={() => history.push('/register')}>
                        사전가입하기
                    </Button>
                    <div className="flex flex-col mt-8 w-3/5 mt-10">
                        <div className="h-3 relative overflow-hidden">
                            <div className="w-full h-full bg-blue-200 absolute"></div>
                            <div className="h-full bg-skyblue-450 absolute"></div>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-300">0</p>
                            <p className="text-gray-300">100000</p>
                        </div>
                    </div>
                    <div className="absolute bottom-1">
                        <Button variant="filled" size="large" textColor="black">
                            고객확인 하셨나요? 완료 후 매매/입출금이 가능합니다.
                        </Button>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex flex-col gap-2 items-center gap-5 my-20">
                    <h2 className="text-4xl font-bold">사전가입 이벤트 및 혜택</h2>
                    <p>지금 바로 코인피닛에 사전가입 하세요!</p>
                </div>
            </section>
            <section>
                <div className="flex justify-evenly">
                    <Card
                        title="Event 1"
                        icon={<SearchIcon />}
                        subTitle="오로지 사전가입고객분들만"
                        buttonText="신청하기"
                    >
                        거래수수료 50% 할인
                    </Card>
                    <Card
                        title="Event 2"
                        icon={<People />}
                        subTitle="최대 추천인 총 2천만원
                        상당 테더 추첨"
                        buttonText="신청하기"
                    >
                        1등 10,000 테더 (1명)
                        2등 1,000 테더 (5명)
                        3등 50 테더 (100명)
                    </Card>
                    <Card
                        title="Event 3"
                        icon={<PhoneMessage />}
                        subTitle="비트코스트 플랫폼을 유튜브 SNS
                        블로그 등 온라인에 홍보해주세요."
                        buttonText="신청하기"
                    >
                        1등 10,000 테더 (1명)
                        2등 1,000 테더 (5명)
                        3등 50 테더 (100명)
                    </Card>
                    <Card
                        title="Event 1"
                        icon={<Person />}
                        subTitle="유튜버,인플루언서,블로거 등
                        비트코스트와 함께 하실
                        파트너 신청을 받고 있습니다."
                        buttonText="신청하기"
                    >
                        거래수수료 페이백 등
                        다양한 혜택을 누려보세요.
                    </Card>
                </div>
                <div className="w-3/4 mx-auto my-20">
                    <Slider
                        infinite={true}
                        speed={600}
                        slidesToShow={2}
                        slidesToScroll={1}
                        arrows={true}
                        nextArrow={<NextArrow />}
                        prevArrow={<PrevArrow />}
                    >
                        <div>
                            <img src={img1} alt="img" />
                        </div>
                        <div>
                            <img src={img2} alt="img" />
                        </div>
                    </Slider>
                </div>
            </section>
            <section className="bg-background2 pt-20 bg-cover ">
                <div className="flex flex-col gap-2 items-center gap-5 py-20">
                    <h2 className="text-4xl font-bold text-white">
                        빠르고 간편한 모바일 앱
                    </h2>
                    <p className="text-white">
                        코인 정보부터 주문까지 모바일에서도 간편하고 빠른 디지털 자산
                        거래소를 만나보세요.
                    </p>
                </div>
                <div className="flex justify-between items-center w-3/4 mx-auto mt-8">
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-2 rounded-lg bg-white p-3">
                            <div className="flex items-center rounded-full px-3 bg-skyblue-450">
                                <img src={playStore} alt="img" />
                            </div>
                            <div className="flex flex-col">
                                <h6 className="text-black font-bold">안드로이드앱</h6>
                                <p>Android App</p>
                            </div>
                        </div>
                        <div className="flex gap-2 rounded-lg bg-white p-3">
                            <div className="flex items-center rounded-full px-3 bg-skyblue-450">
                                <img src={apple} alt="img" />
                            </div>
                            <div className="flex flex-col">
                                <h6 className="text-black font-bold">아이폰앱</h6>
                                <p>IPhone App</p>
                            </div>
                        </div>
                        <img src={qrCode} alt="img" />
                        <div>
                            <p className="text-white text-lg">Scan QR Code</p>
                            <p className="text-white text-lg">DownLoad Android/IOS App</p>
                        </div>
                    </div>
                    <img src={appView} alt="img" />
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col">
                            <h4 className="font-bold text-white">실시간 시세 간편 확인</h4>
                            <p className="text-white">★★★★★</p>
                            <p style={{ maxWidth: '244px' }} className="text-gray-600">
                                앱을 실행하지 않아도 락스크린에서 실시간 시세를 간편하게 확인
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="font-bold text-white">
                                증권사 MTS 수준의 안전한 거래
                            </h4>
                            <p className="text-white">★★★★★</p>
                            <p style={{ maxWidth: '244px' }} className="text-gray-600">
                                빠르고 간편한 모바일 주문 지원 모바일에 최적화된 거래
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-3/4 mx-auto rounded-3xl bg-white p-16 mt-24 mb-20 shadow-md">
                    <h1 className="font-bold text-4xl">exchange service</h1>
                    <div className="flex gap-16 my-9">
                        <div className="flex flex-col gap-6">
                            <div className="flex">
                                <span className="bg-gray-100 p-2 rounded-md">
                                    <MenuIcon />
                                </span>
                            </div>
                            <h2 className="font-bold text-2xl">Trade with confidence</h2>
                            <p className="text-gray-600">
                                믿을수 있는 강력한 보안시스템을 자랑합니다.
                            </p>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex">
                                <span className="bg-gray-100 p-2 rounded-md">
                                    <WalletIcon />
                                </span>
                            </div>
                            <h2 className="font-bold text-2xl">The best security system</h2>
                            <p className="text-gray-600">
                                마진거래소에서는 중앙시스템의 분업화로 사용자의 자금을
                                보호합니다.
                            </p>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex">
                                <span className="bg-gray-100 p-2 rounded-md">
                                    <PencilIcon />
                                </span>
                            </div>
                            <h2 className="font-bold text-2xl">
                                Supporting various Currency
                            </h2>
                            <p className="text-gray-600">
                                마진거래소에서는 국가간의 규제없이 자유로운 거래가 가능합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-14">
                <div className="flex flex-col gap-2 items-center gap-5 my-20">
                    <h2 className="text-4xl font-bold">
                        강력한 멀티팩터 인증으로 24시간 안심거래
                    </h2>
                    <p>
                        글로벌 최고 수준의 파트너들고 함께 가장 안전한 보안체계를
                        구축합니다.
                    </p>
                </div>
                <div className="flex gap-16 items-center w-3/4 mx-auto">
                    <div className="flex flex-col gap-4 rounded-lg border-skyblue-450 border p-8">
                        <TrendingIcon />
                        <h2 className="font-bold text-black text-xl mt-2">
                            Wallet security
                        </h2>
                        <p className="text-gray-600">
                            콜드월렛에 안전하게 분리 보관 최고 수준의 보안 시스템을 기반으로
                            다양한 디지털 자산 지갑을 안전하게 운영합니다.
                        </p>
                        <div className="flex mt-6">
                            <span className="bg-gray-100 p-4 rounded-md">
                                <ArrowIcon />
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 rounded-lg bg-blue-450 p-8">
                        <SearchBlue />
                        <h2 className="font-bold text-white text-xl mt-2">Account plan</h2>
                        <p className="text-gray-600">
                            OTP보다 간편하고 안전한 카카오페이 간편인증으로 2채널 추가인증
                            체계적으로 고안된 보안시스템으로 24시간 모니터링합니다.
                        </p>
                        <div className="flex mt-6">
                            <span className="bg-skyblue-450 p-4 rounded-md">
                                <ArrowIcon color="#FFFFFF" />
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 rounded-lg border-skyblue-450 border p-8">
                        <StatisticsIcon />
                        <h2 className="font-bold text-black text-xl mt-2">
                            Wallet security
                        </h2>
                        <p className="text-gray-600">
                            콜드월렛에 안전하게 분리 보관 최고 수준의 보안 시스템을 기반으로
                            다양한 디지털 자산 지갑을 안전하게 운영합니다.
                        </p>
                        <div className="flex mt-6">
                            <span className="bg-gray-100 p-4 rounded-md">
                                <ArrowIcon />
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-background3 py-20 bg-cover">
                <div className="flex w-3/4 mx-auto justify-between">
                    <div className="flex flex-col gap-10">
                        <h2 className="font-bold text-5xl">신용카드 구매시 혜택</h2>
                        <p className="text-black text-xl">✔ 구매 시 최대 3% 환급</p>
                        <p className="text-black text-xl">
                            ✔ 비트코스트 에서 비트코인 ​​또는 모든 암호화폐로 보상을 받으세요
                        </p>
                        <p className="text-black text-xl">✔ 연회비 없음</p>
                        <div>
                            <Button variant="outlined" size="medium" textColor="black" borderColor="black">
                                대기자 명단에 합류
                            </Button>
                        </div>
                    </div>
                    <img src={creditCard} alt="credit card" />
                </div>
            </section>
            <section className="bg-blue-450">
                <div className="flex gap-10 mx-auto items-stretch w-4/5">
                    <div className="flex flex-col gap-20 bg-skyblue-450 px-12 py-4">
                        <h2 className="font-bold text-white text-5xl">Question</h2>
                        <p className="font-bold text-white text-2xl">도움이 필요하신
                            내용이나 궁금한 점을 알려주세요.</p>
                        <div className="flex gap-6">
                            <Facebook />
                            <Twitter />
                            <Instagram />
                        </div>
                    </div>
                    <form className="w-full flex flex-col gap-8 py-8">
                        <div className="flex justify-between gap-6">
                            <input
                                type="text"
                                className="block w-full sm:text-sm border-gray-300 rounded-md px-2 py-4"
                                placeholder="Name"
                            />
                            <input
                                type="text"
                                className="block w-full sm:text-sm border-gray-300 rounded-md px-2 py-4"
                                placeholder="Phone(optional)"
                            />
                        </div>
                        <input
                            type="text"
                            className="block w-full sm:text-sm border-gray-300 rounded-md px-2 py-4"
                            placeholder="Email"
                        />
                        <textarea
                            rows={3}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-2 py-4 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Message..."
                            defaultValue={''}
                        />
                        <div className="flex justify-center">
                            <Button variant="outlined" size="medium" textColor="black" borderColor="white">
                                보내기
                            </Button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Landing;
