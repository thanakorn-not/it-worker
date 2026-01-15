import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'

const JobCard = ({ job, onPress }: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      className="bg-white p-4 rounded-2xl mb-4 border border-gray-200 shadow-sm"
    >
      <Text className="text-lg font-bold text-gray-900 mb-1">
        {job.title}
      </Text>

      <Text className="text-sm text-gray-500 mb-3">
        {job.company}
      </Text>

      <View className="flex-row flex-wrap gap-2 mb-3">
        <View className="bg-blue-100 px-3 py-1 rounded-full">
          <Text className="text-xs text-blue-700 font-medium">
            {job.location}
          </Text>
        </View>

        <View className="bg-green-100 px-3 py-1 rounded-full">
          <Text className="text-xs text-green-700 font-medium">
            {job.type}
          </Text>
        </View>
      </View>

      <Text className="text-sm font-semibold text-orange-600">
        💰 {job.salary}
      </Text>
    </TouchableOpacity>
  )
}

export default JobCard
