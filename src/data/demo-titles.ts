export const DEMO_TITLES: {[key: string]: string} = {
  resnet50: 'ResNet50, trained on ImageNet', 
  squeezenet: 'SqueezeNet, trained on ImageNet', 
  emotion_ferplus: 'FER+ Emotion, trained on ImageNet', 
  mnist: 'MNIST, handwritten digit prediction'
};

export const DEMO_DESCRIPTIONS: {[key: string]: string} = {
  resnet50: 'ResNet50, a deep convolutional network for image classification. ', 
  squeezenet: 'SqueezeNet is a light-weight convolutional networks for image classification.', 
  emotion_ferplus: 'FER+ Emotion, a deep convolutional neural network for emotion recognition in faces.',
  mnist: 'MNIST, handwritten digit prediction.'
};

export const DEMO_MODEL_LINKS: {[key: string]: string} = {
  resnet50:  'https://github.com/onnx/models/tree/master/resnet50',
  squeezenet: 'https://github.com/onnx/models/tree/master/squeezenet',
  emotion_ferplus: 'https://github.com/onnx/models/tree/master/emotion_ferplus',
  mnist: 'https://github.com/onnx/models/tree/master/mnist'
};