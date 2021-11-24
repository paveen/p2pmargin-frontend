import React from 'react';
import footerLogo from "../../images/footerLogo.png";
import { Button } from "../../components";

const Footer = () => {
    return (
        <footer class="bg-black pt-12 pb-4">
            <div class="container px-6 py-4 mx-auto">
                <div class="lg:flex">
                    <div class="w-full -mx-6 lg:w-2/5">
                        <div class="px-6">
                            <div>
                                <img src={footerLogo} alt="logos" />
                            </div>
                            <p class="max-w-md mt-2 text-gray-600">서울시 강남구 테헤란로 4길 14, 2층</p>
                        </div>
                    </div>
                    <div class="mt-6 lg:mt-0 lg:flex-1">
                        <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                            <div className="flex flex-col gap-1">
                                <h3 class="text-white uppercase">회사</h3>
                                <a href="#" class="block mt-2 text-sm text-gray-300 hover:underline hover:text-skyblue-450">회사소개</a>
                                <a href="#" class="block mt-2 text-sm text-gray-300 hover:underline hover:text-skyblue-450">공지사항</a>
                                <a href="#" class="block mt-2 text-sm text-gray-300 hover:underline hover:text-skyblue-450">이용약관</a>
                                <a href="#" class="block mt-2 text-sm text-gray-300 hover:underline hover:text-skyblue-450">Open API 이용약관</a>
                                <a href="#" class="block mt-2 text-sm text-gray-300 hover:underline hover:text-skyblue-450">개인정보처리방침</a>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 class="text-white uppercase">고객지원</h3>
                                <a href="#" class="block mt-2 text-sm text-gray-300 hover:underline hover:text-skyblue-450">자주하는질문</a>
                                <a href="#" class="block mt-2 text-sm text-gray-300 hover:underline hover:text-skyblue-450">1:1 문의하기</a>
                                <a href="#" class="block mt-2 text-sm text-gray-300 hover:underline hover:text-skyblue-450">Open API</a>
                                <a href="#" class="block mt-2 text-sm text-gray-300 hover:underline hover:text-skyblue-450">거래 이용 안내</a>
                                <a href="#" class="block mt-2 text-sm text-gray-300 hover:underline hover:text-skyblue-450">입출금 이용 안내</a>
                                <a href="#" class="block mt-2 text-sm text-gray-300 hover:underline hover:text-skyblue-450">상장문의 및 제보</a>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 class="text-white uppercase">고객센터  I  1588-5682</h3>
                                <span class="block mt-2 text-sm text-gray-300">사업자등록번호 119-86-54968</span>
                                <div>
                                    <Button
                                        className="mt-6"
                                        variant="filled"
                                        size="small"
                                        textColor="white"
                                    >상담하기</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="h-px my-6 bg-gray-300 border-none" />

                <div>
                    <p class="text-center text-gray-600">© Copyright <span className="text-white">Block Stars.</span> 2021 All Right Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
