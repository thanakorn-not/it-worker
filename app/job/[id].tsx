import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLocalSearchParams, router } from 'expo-router'
import { jobs } from 'data/jobs'

const JobDetail = () => {
  const { id } = useLocalSearchParams()
  const job = jobs.find((item) => item.id.toString() === id)

  if (!job) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center">
        <Text className="text-gray-500">ไม่พบข้อมูลงาน</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="px-5 pt-6" showsVerticalScrollIndicator={false}>

        {/* Back */}
        <TouchableOpacity onPress={() => router.back()} className="mb-4">
          <Text className="text-blue-600 font-semibold">← กลับ</Text>
        </TouchableOpacity>

        {/* Title */}
        <View className="mb-5">
          <Text className="text-2xl font-extrabold text-gray-900 mb-1">
            {job.title}
          </Text>
          <Text className="text-base text-gray-600">
            🏢 {job.company}
          </Text>
        </View>

        {/* Info */}
        <View className="flex-row flex-wrap gap-2 mb-6">
          <View className="bg-blue-100 px-4 py-1.5 rounded-full">
            <Text className="text-sm text-blue-700 font-medium">
              📍 {job.location}
            </Text>
          </View>
          <View className="bg-green-100 px-4 py-1.5 rounded-full">
            <Text className="text-sm text-green-700 font-medium">
              💼 {job.type}
            </Text>
          </View>
        </View>

        {/* Salary */}
        <View className="bg-white rounded-2xl p-4 mb-5 border border-gray-200">
          <Text className="text-sm text-gray-500 mb-1">เงินเดือน</Text>
          <Text className="text-lg font-bold text-orange-600">
            💰 {job.salary}
          </Text>
        </View>

        {/* Description */}
        <View className="bg-white rounded-2xl p-5 mb-5 border border-gray-200">
          <Text className="text-lg font-bold text-gray-900 mb-3">
            รายละเอียดงาน
          </Text>
          <Text className="text-base text-gray-700 leading-6">
            {job.description}
          </Text>
        </View>

        {/* Requirements */}
        <View className="bg-white rounded-2xl p-5 mb-8 border border-gray-200">
          <Text className="text-lg font-bold text-gray-900 mb-3">
            คุณสมบัติที่ต้องการ
          </Text>

          {job.requirements.map((req: string, index: number) => (
            <View key={index} className="flex-row items-start mb-2">
              <Text className="text-blue-600 mr-2">•</Text>
              <Text className="text-base text-gray-700 flex-1">
                {req}
              </Text>
            </View>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default JobDetail
