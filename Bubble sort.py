# -*- coding: utf-8 -*-
"""
Created on Thu Apr 29 19:28:04 2021

@author: Johan
"""
arr=[5,2,1,55,84,13,20,11,10]
id_vector=arr
band=False
while band==False:
    band= True
    for i in range(len(arr)-1):
        if arr[i]<arr[i+1]:
            aux=arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=aux
            band=False
print(arr)





