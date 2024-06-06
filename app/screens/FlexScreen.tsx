/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import type {PropsWithChildren} from 'react';

export const FlexScreen = ({onGoBack}: {onGoBack: () => void}) => {
  const [flexDirection, setflexDirection] = useState('column');
  return (
    <SafeAreaView style={goodbyeStyles.container}>
      <TouchableOpacity onPress={onGoBack} style={goodbyeStyles.backButton}>
        <Text style={goodbyeStyles.backButtonText}>{'⬅️'}</Text>
      </TouchableOpacity>
      <PreviewLayout
        label="flexDirection"
        values={['column', 'row', 'row-reverse', 'column-reverse']}
        selectedValue={flexDirection}
        setSelectedValue={setflexDirection}>
        <View style={[goodbyeStyles.box, {backgroundColor: 'powderblue'}]}>
          <Text style={goodbyeStyles.childrenText}>1</Text>
        </View>
        <View style={[goodbyeStyles.box, {backgroundColor: 'skyblue'}]}>
          <Text style={goodbyeStyles.childrenText}>2</Text>
        </View>
        <View style={[goodbyeStyles.box, {backgroundColor: 'steelblue'}]}>
          <Text style={goodbyeStyles.childrenText}>3</Text>
        </View>
      </PreviewLayout>
    </SafeAreaView>
  );
};

type PreviewLayoutProps = PropsWithChildren<{
  label: string;
  values: string[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}>;

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}: PreviewLayoutProps) => (
  <View style={{padding: 10, flex: 1}}>
    <Text style={goodbyeStyles.label}>{label}</Text>
    <View style={goodbyeStyles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            goodbyeStyles.button,
            selectedValue === value && goodbyeStyles.selected,
          ]}>
          <Text
            style={[
              goodbyeStyles.buttonLabel,
              selectedValue === value && goodbyeStyles.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[goodbyeStyles.childrenContainer, {[label]: selectedValue}]}>
      {children}
    </View>
  </View>
);

const goodbyeStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  childrenContainer: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
    borderWidth: 3,
    borderColor: 'black',
  },
  childrenText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  backButtonText: {
    color: '#000000',
    fontSize: 13,
    fontWeight: '700',
  },
  backButton: {
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderRadius: 8,
    marginTop: 15,
    marginLeft: 20,
    height: 50,
    width: 50,
  },
  box: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: '#b5b5b5',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'black',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#white',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'left',
    marginLeft: 10,
    marginBottom: 15,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
export default FlexScreen;
