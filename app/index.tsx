import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { jobs } from 'data/jobs'
import { router } from 'expo-router'
import JobCard from 'components/jobCard';

const index = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1 px-4 pt-4">
        <View className="mb-4">
          <Text className="text-3xl font-bold text-gray-800 mb-2">
            งาน IT
          </Text>
          <Text className="text-base text-gray-600">
            พบ <Text className="font-semibold text-blue-600">{jobs.length}</Text> ตำแหน่งงาน
          </Text>
        </View>

        <FlatList
            data={jobs}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
                <JobCard 
                    job={item}
                    onPress={() => router.push(`/job/${item.id}`)}
                />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 20}}
        />

       </View>
    </SafeAreaView>
  )
}

export default index