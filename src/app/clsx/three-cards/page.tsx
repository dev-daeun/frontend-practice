import React from 'react';
import clsx from 'clsx';

// 베이스 스타일
const baseStyles = 'rounded-lg transition-all duration-300 overflow-hidden';
  
// variant에 따른 스타일 매핑
const variantStyles: {
  [key: string]: string
} = {
  default: 'bg-white shadow-md hover:shadow-xl border border-gray-200',
  gradient: 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-2xl transform hover:-translate-y-1',
  glass: 'bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:bg-white/20'
};

// 컨텐츠 영역 스타일
const contentStyles: {
  [key: string]: string
} = {
  default: 'text-gray-800',
  gradient: 'text-white',
  glass: 'text-gray-800'
};

// 배지 스타일
const badgeStyles: {
  [key: string]: string
} = {
  default: 'bg-blue-100 text-blue-800',
  gradient: 'bg-white/20 text-white backdrop-blur-sm',
  glass: 'bg-purple-500/20 text-purple-800 backdrop-blur-sm'
};


// 카드 컴포넌트
const Card = ({ variant = 'default', title, description, image, badge, icon }: {variant: string, title: string, description: string, image: string, badge: string, icon: string}) => {

  return (
    <div className={clsx(baseStyles, variantStyles[variant], 'w-80')}>
      {/* 이미지 영역 */}
      {image && (
        <div className="relative h-48 bg-gray-200">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
          {badge && (
            <span className={clsx(
              'absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-medium',
              badgeStyles[variant]
            )}>
              {badge}
            </span>
          )}
        </div>
      )}
      
      {/* 컨텐츠 영역 */}
      <div className={clsx('p-6', contentStyles[variant])}>
        <div className="flex items-start justify-between mb-3">
          <h3 className={clsx(
            'text-xl font-bold',
            variant === 'gradient' ? 'text-white' : 'text-gray-900'
          )}>
            {title}
          </h3>
          {icon && (
            <span className={clsx(
              'text-2xl',
              variant === 'gradient' ? 'text-white/80' : 'text-gray-500'
            )}>
              {icon}
            </span>
          )}
        </div>
        
        <p className={clsx(
          'mb-4 leading-relaxed',
          variant === 'gradient' ? 'text-white/90' : 'text-gray-600'
        )}>
          {description}
        </p>
        
        <button className={clsx(
          'px-4 py-2 rounded-md font-medium transition-colors',
          variant === 'default' && 'bg-blue-500 text-white hover:bg-blue-600',
          variant === 'gradient' && 'bg-white text-purple-600 hover:bg-gray-100',
          variant === 'glass' && 'bg-purple-500 text-white hover:bg-purple-600'
        )}>
          자세히 보기
        </button>
      </div>
    </div>
  );
};

// 메인 앱 컴포넌트
export default function App() {
  const cardData = [
    {
      variant: 'default',
      title: '기본 카드',
      description: '깔끔하고 심플한 디자인의 기본 카드입니다. 그림자 효과와 호버 애니메이션이 적용되어 있습니다.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      badge: 'NEW',
      icon: '⭐'
    },
    {
      variant: 'gradient',
      title: '그라데이션 카드',
      description: '화려한 그라데이션 배경과 함께 모던한 느낌을 주는 카드입니다. 호버 시 살짝 떠오르는 효과가 있습니다.',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=300&fit=crop',
      badge: 'PREMIUM',
      icon: '✨'
    },
    {
      variant: 'glass',
      title: '글래스모피즘 카드',
      description: '투명한 유리 효과를 활용한 트렌디한 디자인의 카드입니다. 배경이 비쳐 보이는 효과가 특징입니다.',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop',
      badge: 'TRENDING',
      icon: '🌟'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            clsx를 활용한 카드 컴포넌트
          </h1>
          <p className="text-lg text-gray-600">
            동일한 컴포넌트에 다양한 스타일을 적용한 예제입니다
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        
        <div className="mt-16 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 주요 특징</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>clsx 활용:</strong> 조건부 클래스 적용으로 깔끔한 스타일 관리</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>variant 시스템:</strong> props를 통해 다양한 디자인 테마 선택 가능</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>재사용성:</strong> 하나의 컴포넌트로 여러 스타일 구현</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>반응형 애니메이션:</strong> 호버 효과와 트랜지션 적용</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}